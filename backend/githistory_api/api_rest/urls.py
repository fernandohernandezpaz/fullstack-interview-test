from .views import ListCommits, ListAuthors
from django.urls import path

urlpatterns = [
    path('commits/', ListCommits.as_view()),
    path('authors/', ListAuthors.as_view()),
]
