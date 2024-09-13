from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SearchQuery
from stackapi import StackAPI


class StackOverflowSearch(APIView):
    def get(self, request):
        query = request.GET.get('q', '')

        SearchQuery.objects.create(query=query)

        SITE = StackAPI('stackoverflow')
        SITE.page_size = 10
        SITE.max_pages = 1
        response = SITE.fetch('similar',
            order = 'desc',
            sort = 'relevance',
            title = query,
            intitle = query,
            intext = query
        )


        return Response(response)