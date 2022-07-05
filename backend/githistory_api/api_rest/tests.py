from django.test import TestCase
from git import Repo
from git.exc import GitCommandError
from django.urls import reverse
from rest_framework import status

repo_url: str = 'https://github.com/fernandohernandezpaz/fullstack-interview-test.git'
temporal_dir: str = '/tmp/test_repo/'


# Create your tests here.
class CloneRepositoryTestCase(TestCase):

    def test_clone_repo_exists(self):
        try:
            repo = Repo.clone_from(repo_url, temporal_dir)
        except GitCommandError:
            repo = Repo.init(temporal_dir)
        self.assertFalse(repo.bare)


class CheckMasterBranchCurrentTestCase(TestCase):
    current_branch: str = 'master'

    def test_check_current_branch(self):
        try:
            repo = Repo.clone_from(repo_url, temporal_dir)
        except GitCommandError:
            repo = Repo.init(temporal_dir)
        self.assertEqual(repo.active_branch.name, self.current_branch)


class CommitsTestCase(TestCase):

    def test_api_commits(self):
        url = reverse('commits')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class CommitTestCase(TestCase):

    def test_api_commit(self):
        url = reverse('commits')
        response = self.client.get(url, format='json')
        hash = response.data[0]['hash']
        url = reverse('detail_commit', kwargs={
            'hash': hash
        })
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class BranchsTestCase(TestCase):

    def test_api_branchs(self):
        url = reverse('branchs')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class BranchTestCase(TestCase):

    def test_api_branch(self):
        url = reverse('branchs')
        response = self.client.get(url, format='json')
        name = response.data[0]
        url = reverse('detail_branch', kwargs={
            'branch_name': name
        })
        print(url)
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class AuthorsTestCase(TestCase):

    def test_api_authors(self):
        url = reverse('authors')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
