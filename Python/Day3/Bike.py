class bike(object):
    def __init__(self,price,speed):
        self.price = price
        self.speed = speed
        self.miles = 0
    def displayInfo(self):
        print self.price, self.speed, self.miles
        return self.price, self.speed, self.miles
    def ride(self):
        print "Riding"
        self.miles+=10
        return self
    def reverse(self):
        print "Reversing"
        if self.miles>=5:
            self.miles-=5
        else:
            self.miles=0
        return self

bike(200,"25mph").ride().ride().ride().reverse().displayInfo()
bike(200,"25mph").ride().ride().reverse().reverse().displayInfo()
bike(200,"25mph").reverse().reverse().reverse().displayInfo()
