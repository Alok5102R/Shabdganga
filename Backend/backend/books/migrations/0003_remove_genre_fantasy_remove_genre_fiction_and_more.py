# Generated by Django 5.0.1 on 2024-03-03 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_genre_language_remove_book_genre_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='genre',
            name='Fantasy',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='Fiction',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='Literature',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='NonFiction',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='SciFi',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='Thriller',
        ),
        migrations.RemoveField(
            model_name='language',
            name='English',
        ),
        migrations.RemoveField(
            model_name='language',
            name='Hindi',
        ),
        migrations.RemoveField(
            model_name='language',
            name='Sanskrit',
        ),
        migrations.AddField(
            model_name='genre',
            name='genre',
            field=models.CharField(default='genre', max_length=15),
        ),
        migrations.AddField(
            model_name='language',
            name='language',
            field=models.CharField(default='language', max_length=15),
        ),
    ]
