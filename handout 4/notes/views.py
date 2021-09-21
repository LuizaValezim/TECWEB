from django.shortcuts import render
from .models import Note

def index(request):
    if request.method == 'POST':
        title = request.POST.get('título')
        content = request.POST.get('detalhes')

        # Criar um UPDATE caso o título já exista
        new_note = Note(title=title, content=content)
        new_note.save()

        return redirect('index')
    else:
        all_notes = Note.objects.all()
        return render(request, 'notes/index.html', {'notes': all_notes})