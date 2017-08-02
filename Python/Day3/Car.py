class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price>10000:
            self.tax=0.15
        else:
            self.tax=0.12
        def display_all():
            print "Price: "+str(self.price)
            print "Speed: "+str(self.speed)
            print "Fuel: "+str(self.fuel)
            print "Mileage: "+str(self.mileage)
            print "Tax: "+str(self.tax)
            print "\n"
            return self
        display_all()
Car(15000,"65mph","Full","15mpg")
Car(2000,"35mph","Empty","40mpg")
Car(8000,"35mph","Full","30mpg")
Car(2000,"15mph","Full","15mpg")
Car(6000,"35mph","Full","25mpg")
Car(200000,"5mph","Full","60mpg")