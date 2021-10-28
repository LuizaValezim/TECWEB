from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add', views.add, name="add"), 
    path('delete', views.delete, name='delete'),
    path('update', views.update, name='update'),
    # path('tagtypes', views.tagTypes, name="tagtypes"),
    # path('tagcontent', views.tagContent, name="tagcontent"),
    path('api/notes/<int:note_id>/', views.api_note)
]   