@echo off

start "NodeJS" cmd /k "cd Frontend && npm start"
start "DjangoPy" cmd /k "cd Backend/backend && python manage.py runserver"