import re
from datetime import datetime
from git import Repo, Commit
from git.exc import GitCommandError
from typing import Optional, List, Dict


class Repositorio:
    repo_path: str = 'https://github.com/fernandohernandezpaz/fullstack-interview-test.git'
    repo: Repo = None
    temporal_dir: str = '/tmp/repo'

    def __init__(self, url_repo: Optional[str] = None):
        if url_repo:
            self.repo_path = url_repo
        try:
            self.repo = Repo.clone_from(self.repo_path, self.temporal_dir)
        except GitCommandError:
            self.repo = Repo.init(self.temporal_dir)
        if self.verificar_cargado_repositorio():
            print('El repositorio {} cargo exitosamente.'.format(self.repo_path))
        else:
            raise Exception('No pudo cargar el repositorio en {} :('.format(self.repo_path))

    def verificar_cargado_repositorio(self) -> bool:
        return not self.repo.bare

    def obtener_lista_commits(self, branch_name: str = 'master', limit: Optional[int] = None) -> List[Dict[str, str]]:
        """
        Obtener lista de commits de una rama
        :param branch_name: nombre de la rama de los commits
        :param limit: cantidad de commits a obtener en la rama
        :return:
            [{
                'autor': str,
                'correo': str,
                'mensaje_commit': str,
                'hash': str
            }]
        """
        commits_branch: List[Commit] = list(self.repo.iter_commits(branch_name, max_count=limit))
        commits: List[Dict[str:str]] = []
        for c in commits_branch:
            commits.append({
                'autor': c.author.name,
                'correo': c.author.email,
                'mensaje_commit': c.message,
                'hash': c.hexsha
            })

        return commits

    def obtener_commit(self, hash: str = '') -> Dict[str, str]:
        commit_found: Commit = self.repo.commit(hash)
        format = '%Y-%m-%d %I:%M:%S %p'
        date: str = commit_found.committed_datetime.strftime(format)
        print(commit_found.stats.files)
        commit: Dict[str, str] = {
            'mensaje': commit_found.message.strip(),
            'autor': commit_found.author.name,
            'correo': commit_found.author.email,
            'datetime': date,
            'archivos': commit_found.stats.files,
        }
        # commit = self.repo.git.execute(['git', 'show', hash])
        return commit

    def obtener_lista_autores(self, branch_name: str = 'master', limit: Optional[int] = None) -> List[Dict[str, str]]:
        """
            Obtener lista de autores de commits de una rama
        :param branch_name: nombre de la rama de los commits
        :param limit: cantidad de commits a obtener en la rama
        :return:
            [{
                'autor': str,
            }]
        """
        commits_branch: List[Commit] = list(self.repo.iter_commits(branch_name, max_count=limit))
        commits_authors: List[Dict[str, str]] = []
        authors: List = []
        for c in commits_branch:
            author_name = c.author.name
            if author_name not in authors:
                authors.append(author_name)

                commits_authors.append({
                    'autor': author_name,
                })

        return commits_authors

    def obtener_lista_ramas(self) -> List[str]:
        """
            Obtener lista de ramas del repositorio
        :return:
            [str,str,...,str]
        """
        remote_branches: List[str] = []
        for branch in self.repo.git.branch('-r').split('\n'):
            if 'HEAD' not in branch:
                remote_branches.append(branch.strip())
        return remote_branches

    def obtener_lista_pull_requests(self) -> List[str]:
        """
            Obtener lista de ramas del repositorio
        :return:
            [str,str,...,str]
        """
        remote_branches: List[str] = []
        prnums = []
        # From regular merges
        merges = self.repo.git.log('--oneline', '--merges')
        issues = re.findall(u"Merge pull request \\#(\\d*)", merges)
        prnums.extend(int(s) for s in issues)

        # From Homu merges (Auto merges)
        issues = re.findall(u"Auto merge of \\#(\\d*)", merges)
        prnums.extend(int(s) for s in issues)

        # From fast forward squash-merges
        commits = self.repo.git.log('--oneline', '--no-merges', '--first-parent')
        issues = re.findall(u'^.*\\(\\#(\\d+)\\)$', commits, re.M)
        prnums.extend(int(s) for s in issues)

        # get PR data from github repo
        prnums.sort()
        prs = [self.repo.get_pull(n) for n in prnums]
        # print(self.repo.git.execute(['git', 'ls-remote', 'origin', 'pull-requests/*']))
        # print(self.repo.git.iter_pulls(state="open"))
        # for branch in self.repo.git.branch('-r').split('\n'):
        #     if 'HEAD' not in branch:
        #         remote_branches.append(branch.strip())
        return remote_branches
