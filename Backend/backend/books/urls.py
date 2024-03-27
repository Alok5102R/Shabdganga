from django.urls import path, include
from . import views
from rest_framework import routers

booksrouter = routers.DefaultRouter()

booksrouter.register(r'userapi',views.UserViewset)
booksrouter.register(r'profileapi',views.ProfileViewset,basename='profile')
booksrouter.register(r'userprofileapi',views.UserProfileViewset,basename='userprofile')
booksrouter.register(r'bookapi',views.BookViewset)
booksrouter.register(r'authorapi',views.AuthorViewset)
booksrouter.register(r'languageapi',views.LanguageViewset)
booksrouter.register(r'genreapi',views.GenreViewset)
booksrouter.register(r'signinapi',views.SigninViewset)




urlpatterns = [
    path('',views.home,name='home'),
    path('whoami',views.whoami,name='whoami'),
    path('csrf-token/', views.csrf_token_view, name='csrf_token'),
    path('login',views.LoginView.as_view()),
    path('user',views.UserView.as_view()),
    path('userdetail',views.LoggedInUser.as_view()),



    path('api/',include(booksrouter.urls))
]
