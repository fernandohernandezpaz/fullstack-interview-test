from rest_framework.views import APIView
from rest_framework.response import Response
from utils.Repositorio import Repositorio

repositorio = Repositorio()


# Create your views here.
class ListCommits(APIView):
    """
        View to list all the commits.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        """
        Return a list of all users.
        """

        commits = repositorio.obtener_lista_commits()

        return Response(commits)


class DetailCommit(APIView):
    """
        View to list all the commits.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request, hash):
        """
        Return a list of all users.
        """
        commit = repositorio.obtener_commit(hash)

        return Response(commit)


class ListAuthors(APIView):
    """
        View to list all authors.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        """
        Return a list of all authors.
        """

        authors = repositorio.obtener_lista_autores()

        return Response(authors)


class ListBranchs(APIView):
    """
        View to list all branchs.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        """
        Return a list of all authors.
        """

        branchs = repositorio.obtener_lista_ramas()

        return Response(branchs)


class ListPullRequests(APIView):
    """
        View to list all pull requests.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        """
        Return a list of all pull requests.
        """

        pull_requests = repositorio.obtener_lista_pull_requests()

        return Response(pull_requests)
