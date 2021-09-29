from django.db import models

class Note(models.Model):
    content = models.TextField()

    def __str__(self):
        return f'{self.content}'    