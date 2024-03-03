@echo off

start "Script 1" cmd /k "cd Frontend && npm start"
start "Script 2" cmd /k "cd Backend/backend && python manage.py runserver"