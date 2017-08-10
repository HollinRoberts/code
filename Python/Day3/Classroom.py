class classroom(object):
    def __init__(self,name):
        self.name=name
        self.room=[]
    def add(self,add):
        self.room.append(add)
        return self
    def speakall(self):
        for i in range(0,len(self.room)):
            self.room[i].speak()
        return self
class Kid(object):
    def __init__(self,name_first,name_last,):
        self.name_first=name_first.capitalize()
        self.name_last=name_last.capitalize()
    def speak(self):
        print "Hi, I'm", self.name_first, self.name_last + '!'
        return self
    def charm(self):
        print "Ray is great!"
        return self

kid_1=Kid("billy","francis")
kid_2=Kid("frank","francis")

class1=classroom("Python").add(kid_1).add(kid_2)

class1.speakall()




