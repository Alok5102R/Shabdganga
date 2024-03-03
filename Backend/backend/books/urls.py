from django.urls import path, include
from . import views
from rest_framework import routers

booksrouter = routers.DefaultRouter()

booksrouter.register(r'userapi',views.UserViewset)
booksrouter.register(r'profileapi',views.ProfileViewset)
booksrouter.register(r'bookapi',views.BookViewset)
booksrouter.register(r'authorapi',views.AuthorViewset)
booksrouter.register(r'languageapi',views.LanguageViewset)
booksrouter.register(r'genreapi',views.GenreViewset)



urlpatterns = [
    path('',views.home,name='home'),

    path('api/',include(booksrouter.urls))
]
