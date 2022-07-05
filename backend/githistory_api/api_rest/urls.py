from .views import (ListCommits, ListAuthors,
                    ListBranchs, ListPullRequests,
                    DetailCommit, DetailBranch)
from django.urls import path

urlpatterns = [
    path('commits/', ListCommits.as_view(), name='commits'),
    path('commits/<str:hash>/', DetailCommit.as_view(), name='detail_commit'),
    path('authors/', ListAuthors.as_view(), name='authors'),
    path('branchs/', ListBranchs.as_view(), name='branchs'),
    path('branchs/<str:branch_name>/', DetailBranch.as_view(), name='detail_branch'),
    path('pull_requests/', ListPullRequests.as_view(), name='pull_requests'),
]
