# Generated by Django 5.0.1 on 2024-03-03 17:56

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_remove_genre_genre_remove_language_language_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='genre',
            name='genre1',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='genre2',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='genre3',
        ),
        migrations.RemoveField(
            model_name='language',
            name='language1',
        ),
        migrations.RemoveField(
            model_name='language',
            name='language2',
        ),
        migrations.RemoveField(
            model_name='language',
            name='language3',
        ),
        migrations.AddField(
            model_name='genre',
            name='fantasy',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='genre',
            name='fiction',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='genre',
            name='literature',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='genre',
            name='nonFiction',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='genre',
            name='sciFi',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='genre',
            name='thriller',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='genre',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='language',
            name='english',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='language',
            name='hindi',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='language',
            name='other',
            field=models.CharField(default='n', max_length=2),
        ),
        migrations.AddField(
            model_name='language',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.RemoveField(
            model_name='book',
            name='genre',
        ),
        migrations.RemoveField(
            model_name='book',
            name='language',
        ),
        migrations.AlterField(
            model_name='genre',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='language',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AddField(
            model_name='book',
            name='genre',
            field=models.CharField(choices=[('Fiction', 'Fiction'), ('Non-Fiction', 'Non-Fiction'), ('Thriller', 'Thriller'), ('Fantasy', 'Fantasy'), ('Literature', 'Literature'), ('Sci-Fi', 'Sci-Fi'), ('Mixed', 'Mixed')], default='Mixed', max_length=15),
        ),
        migrations.AddField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('English', 'English'), ('Hindi', 'Hindi'), ('Other', 'Other')], default='Other', max_length=10),
        ),
    ]