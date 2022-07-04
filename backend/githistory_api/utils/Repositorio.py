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
                'mensaje_comit': str,
                'hash': str
            }]
        """
        commits_branch: List[Commit] = list(self.repo.iter_commits(branch_name, max_count=limit))
        commits: List[Dict[str:str]] = []
        for c in commits_branch:
            commits.append({
                'autor': c.author.name,
                'correo': c.author.email,
                'mensaje_comit': c.message,
                'hash': c.hexsha
            })

        return commits

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
