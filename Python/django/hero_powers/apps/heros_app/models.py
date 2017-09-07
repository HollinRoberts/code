# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from django.db import models

class HeroManager(models.Manager):
    def hero_create(self,postData):
        name=postData['name']
        ability=Power.objects.get(id=1)
        print ability.name
        hero=Hero.objects.create(name=name)
        print hero.name
        hero.powers.add(ability)
        print hero.powers.get(id=1)
        hero.save()
        return self
    def power_create(self,postData):
        name=postData['powers']
        desc=postData['desc']
        Power.objects.create(name=name,desc=desc)
        return self

class Power(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    def __repr__(self):
        return "<Powers object: {} {}>".format(self.name, self.desc)
    objects = HeroManager()

class Hero(models.Model):
    name = models.CharField(max_length=255)
    powers = models.ManyToManyField(Power)
    likes = models.ManyToManyField(User)
    def __repr__(self):
        return "<Heros object: {} {}>".format(self.name, self.powers)
    objects = HeroManager()