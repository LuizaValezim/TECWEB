from django.shortcuts import render, redirect
from .models import Note

def index(request):
    lastNote = Note.objects.all()
    return render(request, '../index.html', {'notes': lastNote})   

def add(request):
    content = request.POST.get('detalhes')
    note = Note(content=content)
    note.save()
    return redirect('index')