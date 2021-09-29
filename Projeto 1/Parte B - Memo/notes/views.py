from django.shortcuts import render, redirect
from .models import Note

def index(request):
    all_notes = Note.objects.all()
    last_note = Note.objects.last()
    return render(request, 'notes/index.html', {'notes': all_notes, 'last_note': last_note})   


def add(request):
    simulado = request.POST.get('simulado')
    note = Note(simulado=simulado)
    note.save()
    return redirect('index')