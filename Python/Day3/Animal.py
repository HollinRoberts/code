class Animal(object):
    def __init__(self,name,health):
        self.name = name
        self.health = health
    def walk(self):
        self.health-=1
        return self
    def run(self):
        self.health-=5
        return self
    def display_health(self):
        print self.health
        return self


class Dog(Animal):
    def __init__(self,name,health=150):
        super(Dog,self).__init__(name,health=150)
        # self.health=150
    def pet(self):
        self.health+=5

class Dragon(Animal):
    def __init__(self,name,health=170):
        super(Dragon,self).__init__(name,health=170)
        self.health=170
    def fly(self):
        self.health-=10
        return self
    def display_health(self):
        super(Dragon,self).display_health()
        print "I am a Dragon"



animal = Animal("james",30)

dog = Dog("bob")
dragon = Dragon("crunch")
animal1= Animal("dj",60)

animal.walk().walk().walk().run().run().display_health()
dog.walk().run().pet()
dragon.fly().display_health()
animal1.display_health()