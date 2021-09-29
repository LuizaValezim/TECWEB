from django.db import models

class Note(models.Model):
    simulado = models.TextField(default=None, blank=True, null=True)

    def __str__(self):
        return f'{self.simulado}'    