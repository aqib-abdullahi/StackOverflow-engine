from django.db import models

class SearchQuery(models.Model):
    query = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)