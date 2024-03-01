from django.urls import path, include
from .views import home, UserViewset
from rest_framework import routers

booksrouter = routers.DefaultRouter()

booksrouter.register(r'userapi',UserViewset)

urlpatterns = [
    path('',home,name='home'),

    path('api/',include(booksrouter.urls))
]
