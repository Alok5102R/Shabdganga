# Generated by Django 5.0.1 on 2024-03-03 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0005_remove_genre_genre1_remove_genre_genre2_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='genre',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='language',
        ),
    ]
