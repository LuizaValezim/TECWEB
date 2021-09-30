from django.shortcuts import render, redirect
from .models import Pessoa

def index(request):
    nPessoas = Pessoa.objects.count()
    allPessoas = Pessoa.objects.all()
    return render(request, 'notes/index.html', {'nPessoas': nPessoas, 'allPessoas': allPessoas})   

def add(request):
    nome = request.POST.get('nome')
    sobrenome = request.POST.get('sobrenome')
    pessoa = Pessoa(nome=nome, sobrenome=sobrenome)
    pessoa.save()
    return redirect('index')

def tagTypes(request):
    allPessoas = Pessoa.objects.all()
    return render(request, 'notes/tagTypes.html', {'allPessoas': allPessoas})  