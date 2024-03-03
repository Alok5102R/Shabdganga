from django.db import models
from django.contrib.auth import get_user_model                      # Added Manually 
import uuid                                                         # Added Manually 
from datetime import datetime                                       # Added Manually 

# Create your models here.

User = get_user_model()



class Genre(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fiction = models.CharField(max_length=2, default='n')
    nonFiction = models.CharField(max_length=2, default='n')
    thriller = models.CharField(max_length=2, default='n')
    fantasy = models.CharField(max_length=2, default='n')
    literature = models.CharField(max_length=2, default='n')
    sciFi = models.CharField(max_length=2, default='n')

    def __str__(self):
        return self.user.username



class Language(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    english = models.CharField(max_length=2, default='n')
    hindi = models.CharField(max_length=2, default='n')
    other = models.CharField(max_length=2, default='n')

    def __str__(self):
        return self.user.username



class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fullName = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    gender = models.CharField(max_length=10,choices=(
        ('Male', 'Male'),
        ('Female','Female'),
        ('Other','Other')
        ))
    accountType = models.CharField(max_length=10,choices=(
        ('Author', 'Author'),
        ('Reader','Reader')
        ))
    avatar = models.CharField(max_length=250)

    def __str__(self):
        return self.user.username




class Book(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    title = models.CharField(max_length=150)
    releaseDate = models.DateTimeField(default=datetime.now)
    genre = models.CharField(max_length=15,choices=(
        ('Fiction', 'Fiction'),
        ('Non-Fiction','Non-Fiction'),
        ('Thriller', 'Thriller'),
        ('Fantasy', 'Fantasy'),
        ('Literature', 'Literature'),
        ('Sci-Fi', 'Sci-Fi'),
        ('Mixed', 'Mixed')
        ), default='Mixed')
    language = models.CharField(max_length=10,choices=(
        ('English', 'English'),
        ('Hindi','Hindi'),
        ('Other','Other'),
        ), default='Other')
    summary = models.TextField(max_length=3000)
    views = models.BigIntegerField()

    def __str__(self):
        return self.title



class Author(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
    


