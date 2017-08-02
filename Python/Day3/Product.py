class product(object):
    def __init__(self,price,item_name,weight,brand,cost):
        self.price = price
        self.item = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
    def sell(self):
        self.status= "sold"
        return self
    def add_tax(self,tax):
        self.price+=(self.price*tax)
        return self
    def re_turn(self,reason):
        if reason=="defective":
            self.status="defective"
            self.price=0
        if reason=="inbox":
            self.status="for sale"
        if reason=="opened":
            self.status="used"
            self.price*=0.80
        return self
    def display(self):
        print "Price: "+ str(self.price) 
        print "Item Name: "+ str(self.item)
        print "Weight: "+ str(self.weight)
        print "Brand: "+ str(self.brand)
        print "Cost: "+ str(self.cost)
        print "Status: "+ str(self.status)
        print "\n"
        return self

product(50,"Shovel","5lbs","digger",5).add_tax(.05).display()
