# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-22 02:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_auto_20170821_1540'),
        ('heros_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='likes',
            field=models.ManyToManyField(to='login.User'),
        ),
    ]