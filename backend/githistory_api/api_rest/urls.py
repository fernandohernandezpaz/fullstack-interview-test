from .views import (ListCommits, ListAuthors,
                    ListBranchs, ListPullRequests,
                    DetailCommit, DetailBranch)
from django.urls import path

urlpatterns = [
    path('commits/', ListCommits.as_view()),
    path('commits/<str:hash>/', DetailCommit.as_view()),
    path('authors/', ListAuthors.as_view()),
    path('branchs/', ListBranchs.as_view()),
    path('branchs/<str:branch_name>/', DetailBranch.as_view()),
    path('pull_requests/', ListPullRequests.as_view()),
]
