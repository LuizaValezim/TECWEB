from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add', views.add, name="add"), 
    path('delete', views.delete, name='delete'),
    path('update', views.update, name='update'),
    path('listtags', views.listTags, name="listtags"),
    path('notesoftag', views.notesOfTag, name="notesoftag")
]   