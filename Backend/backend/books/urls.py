from django.urls import path, include
from . import views
from rest_framework import routers

booksrouter = routers.DefaultRouter()

booksrouter.register(r'userapi',views.UserViewset,basename='user')
booksrouter.register(r'profileapi',views.ProfileViewset,basename='profile')
booksrouter.register(r'userprofileapi',views.UserProfileViewset,basename='userprofile')
booksrouter.register(r'bookapi',views.BookViewset,basename='book')
booksrouter.register(r'authorapi',views.AuthorViewset,basename='author')
booksrouter.register(r'languageapi',views.LanguageViewset,basename='language')
booksrouter.register(r'genreapi',views.GenreViewset,basename='genere')
booksrouter.register(r'signinapi',views.SigninViewset,basename='signin')




urlpatterns = [
    path('',views.home,name='home'),
    path('whoami',views.whoami,name='whoami'),
    path('csrf-token/', views.csrf_token_view, name='csrf_token'),
    path('login',views.LoginView.as_view(),name='login'),
    path('user',views.UserView.as_view(),name='loggeduser'),
    path('userdetail',views.LoggedInUser.as_view(),name='loggeduserdetails'),



    path('api/',include(booksrouter.urls))
]
