from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Note
from .serializers import NoteSerializer

def index(request):
    all_notes = Note.objects.all()
    return render(request, 'notes/index.html', {'notes': all_notes})       

def add(request):
    title = request.POST.get('titulo')
    content = request.POST.get('detalhes')
    # tagTitle = request.POST.get('tagtitle').lower()
    # if tagTitle == "":
    note = Note(title=title, content=content)
    note.save()
    # else:
        # if verifyExists(tagTitle): 
        #     tag = Tag.objects.get(tagTitle=tagTitle)

        # else:
        # tag = createTag(tagTitle)
            
        # note = Note(title=title, content=content, tag=tag)
    return redirect('index')

def delete(request):
    idNote = request.POST.get('delete')
    note = Note.objects.get(id=int(idNote))
    note.delete()
    # tagid = note.tag
    # print(tagid)
    # if Note.objects.filter(tag=tagid).count() != 0:
    #     pass
    # else:
        # tag = Tag.objects.get(tagTitle = tagid)
        # tag.delete()
    
    return redirect('index')

def update(request):
    idNote = request.POST.get('update')
    title = request.POST.get('titulo')
    content = request.POST.get('detalhes')
    # tagTitle = request.POST.get('tagtitle').lower()
    note = Note.objects.get(id=int(idNote))
    # originalTag = note.tag

    # if tagTitle == "":
    #     note.tag.tagTitle = ""
    # else:
    #     if verifyExists(tagTitle):
    #         tag = Tag.objects.get(tagTitle=tagTitle)
    #     else:
    # tag = createTag(tagTitle)

    # note.tag = tag
    note.title = title
    note.content = content
    note.save()
    
    # if Note.objects.filter(tag=originalTag).count() == 0:
    #     tag = Tag.objects.get(tagTitle = originalTag)
    #     tag.delete()
    # else:
    #     pass
    return redirect('index')

# def tagTypes(request):
#     all_tags = Tag.objects.all()
#     return render(request, '../templates/notes/tagTypes.html', {'tags': all_tags})

# def tagContent(request):
#     tagTitle = request.GET.get('tag')
#     tag = Tag.objects.get(tagTitle = tagTitle)
#     notes = Note.objects.filter(tag=tag.id)
    # return render(request, '../templates/notes/tagContent.html', {'notes': notes, 'tag_title': tagTitle})

# def createTag(tagTitle):
#     tag = Tag(tagTitle = tagTitle.lower())
#     tag.save()
#     return tag

# def verifyExists(tagTitle):
#     if Tag.objects.filter(tagTitle = tagTitle.lower()).exists():
#         return True
#     else: 
#         return False
    
@api_view(['GET', 'POST'])
def api_note(request, note_id):
    try:
        note = Note.objects.get(id=note_id)
    except Note.DoesNotExist:
        raise Http404()
    serialized_note = NoteSerializer(note)
    return Response(serialized_note.data)