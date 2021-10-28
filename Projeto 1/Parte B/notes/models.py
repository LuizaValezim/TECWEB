from django.db import models

# class Tag(models.Model):
#     tagTitle = models.CharField(max_length=200)
#     def __str__(self):
#       return f"{self.tagTitle}"

class Note(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    # tag = models.ForeignKey(Tag, blank=True, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return f'{self.id}. {self.title}'    
        # return f'{self.id}. {self.title}. {self.tag}'    