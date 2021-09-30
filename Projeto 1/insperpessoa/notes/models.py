from django.db import models

class Pessoa(models.Model):
    nome = models.TextField(default=None, blank=True, null=True)
    sobrenome = models.TextField(default=None, blank=True, null=True)

    def __str__(self):
        return f'{self.nome}. {self.sobrenome}'    