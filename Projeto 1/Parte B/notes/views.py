from django.shortcuts import render, redirect
from .models import Note, Tag

def index(request):
    all_notes = Note.objects.all()
    return render(request, '../templates/notes/index.html', {'notes': all_notes})       

def createTag(tagTitle):
    tag = Tag(tagTitle = tagTitle)
    tag.save()
    return tag

def verifyExists(tagTitle):
    if Tag.objects.filter(tagTitle = tagTitle).exists():
        return True
    else: 
        return False

def add(request):
    title = request.POST.get('titulo')
    content = request.POST.get('detalhes')
    tagTitle = request.POST.get('tagtitle')
    if tagTitle == "":
        note = Note(title=title, content=content)
        note.save()
        return redirect('index')
    else:
        if verifyExists(tagTitle): 
            tag = Tag.objects.get(tagTitle=tagTitle)

        else:
            tag = createTag(tagTitle)
            
        note = Note(title=title, content=content, tag=tag)
        note.save()
        return redirect('index')

def delete(request):
    idNote = request.POST.get('delete')
    note = Note.objects.get(id=int(idNote))
    note.delete()
    return redirect('index')

def update(request):
    idNote = request.POST.get('update')
    title = request.POST.get('titulo')
    content = request.POST.get('detalhes')
    tagTitle = request.POST.get('tagtitle')
    note = Note.objects.get(id=int(idNote))
    if tagTitle == "":
        note.tag.tagTitle = ""
    else:
        if verifyExists(tagTitle): 
            tag = Tag.objects.get(tagTitle=tagTitle)

        else:
            tag = createTag(tagTitle)
    
    note.tag = tag
    note.title = title
    note.content = content
    note.save()
    return redirect('index')

def tagTypes(request):
    all_tags = Tag.objects.all()
    return render(request, '../templates/notes/tagTypes.html', {'tags': all_tags})

def tagContent(request):
    tagTitle = request.GET.get('tag')
    tag = Tag.objects.get(tagTitle = tagTitle)
    notes = Note.objects.filter(tag=tag.id)
    return render(request, '../templates/notes/tagContent.html', {'notes': notes, 'tag_title': tagTitle})