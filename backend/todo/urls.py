from django.urls import path
from . import views

from rest_framework.routers import DefaultRouter
router=DefaultRouter()
router.register('todo',views.TodoViewSet,basename='todo')
 
urlpatterns = [
    
]
urlpatterns += router.urls
