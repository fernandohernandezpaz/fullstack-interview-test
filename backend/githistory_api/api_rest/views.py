from rest_framework.views import APIView
from rest_framework.response import Response
from utils.Repositorio import Repositorio


# Create your views here.
class ListCommits(APIView):
    """
    View to list all the commits in the system.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        """
        Return a list of all users.
        """
        repositorio = Repositorio()

        commits = repositorio.obtener_lista_commits()

        return Response(commits)


class ListAuthors(APIView):
    """
    View to list all authors in the system.
    """
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        """
        Return a list of all authors.
        """
        repositorio = Repositorio()

        authors = repositorio.obtener_lista_autores()

        return Response(authors)
