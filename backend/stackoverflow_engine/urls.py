from django.urls import path
from stackoverflow_engine.views import StackOverflowSearch

urlpatterns = [
    path('api/search/', StackOverflowSearch.as_view(), name='stackoverflow_search')    
]