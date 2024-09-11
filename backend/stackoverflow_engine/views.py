from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SearchQuery
import requests


class StackOverflowSearch(APIView):
    def get(self, request):
        query = request.GET.get('q', '')

        SearchQuery.objects.create(query=query)
        response = requests.get(
            'https://api.stackexchange.com/2.3/search',
            params={
                'order': 'desc',
                'sort': 'activity',
                'intitle': query,
                'site': 'stackoverflow'
            }
        )

        return Response(response.json())