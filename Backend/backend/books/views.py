from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from rest_framework import viewsets, status
from django.core.serializers import serialize
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Profile, Book, Author, Language, Genre
from . import serializers
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
import jwt, datetime
from django.conf import settings


# Create your views here.

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = serializers.ProfileSerializer

# !!! Currenrly not in use
class SigninViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.SigninSerializer

    def create(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return Response({'message': 'Sign-in successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class UserProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = serializers.UserProfileSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        response = Response("Registered", status=status.HTTP_201_CREATED)
        return response

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

def whoami(request):
    username = request.user.username
    print("Hello")
    print(request.user)
    return JsonResponse({'message': username})


def csrf_token_view(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

class LoginView(APIView):
    allowed_methods = ['POST']
    def post(self,request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            payload = {
                'username': user.username,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                'iat': datetime.datetime.utcnow()
            }
            token = jwt.encode(payload, 'secret', algorithm='HS256')
            response = Response()
            # response.set_cookie('jwt', token, httponly=True, samesite="None", secure=False)
            response.data = {"jwt":token,"User":username,"Login":"Success"}
            return response
        else:
            raise AuthenticationFailed("User not found")
    
class UserView(APIView):
    allowed_methods = ['POST']
    def post(self, request):
        response = get_user(request)
        return response
    
class LoggedInUser(APIView):
    def post(self, request):
        username = request.data['username']
        userdetail = User.objects.get(username=username)
        userprofile = Profile.objects.get(user=userdetail)
        # userdetail = serialize('js',userdetail)
        return JsonResponse({
            "username":userdetail.username,
            "email":userdetail.email,
            "timeStamp":str(userdetail.date_joined)[:10],
            "fullName":userprofile.fullName,
            "country":userprofile.country,
            "gender":userprofile.gender,
            "accountType":userprofile.accountType,
            "avatar": userprofile.avatar
            })
    
    def get(self, request):
        return JsonResponse({"not serving currently":"True"})
    



# ================== General Functions ==================    
    
# Get username from jwt Token    
def get_user(request):
    jwtoken = request.data['jwt']
    token = ""
    try:
        token = jwt.decode(jwtoken, 'secret', algorithms=['HS256'])
        return JsonResponse({"username":token['username']})
    except:
        raise AuthenticationFailed("Invalid Token")


    