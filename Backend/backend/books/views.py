from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Profile, Book, Author, Language, Genre
from . import serializers
from django.contrib.auth import authenticate, login
import json

# Create your views here.

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = serializers.ProfileSerializer

class UserProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = serializers.UserProfileSerializer

class BookViewset(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = serializers.BookSerializer

class AuthorViewset(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = serializers.AuthorSerializer

class LanguageViewset(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = serializers.LanguageSerializer

class GenreViewset(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = serializers.GenreSerializer




def home(request):
    return HttpResponse("Hello")

def signup(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    password2 = request.POST.get('password2')
    email = request.POST.get('email')
    accountType = request.POST.get('accountType') # Author/Reader

    userobj = User.objects.get(username=username)

    if userobj is not None:
        return JsonResponse({'message': 'username already exists'})

    userobj = User.objects.get(email=email)

    if userobj is not None:
        return JsonResponse({'message': 'email already exists'})
    
    if password==password2:
        usernew = User.objects.create(username=username, password=password, email=email)
        usernew.save()
        profilenew = Profile.objects.create(user=usernew, accountType=accountType)
        profilenew.save()
        return JsonResponse({'message': 'User registered successfully'})
    else:
        return JsonResponse({'message': 'Password does not match.'})





def signin(request):
    username = request.POST.get('username')
    password = request.POST.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
    
    return "Logged In"