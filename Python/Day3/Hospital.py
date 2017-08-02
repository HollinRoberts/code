class Patient(object):
    def __init__(self,id,name,allergies):
        self.id=id
        self.name=name
        self.allergies=allergies
        self.bed=0
    def show(self):
        print self.id
        print self.name
        print self.allergies
        print self.bed
        return self
class Hospital(object):
    def __init__(self,name,capacity):
        self.patients=[]
        self.name=name
        self.capacity=capacity
    def admit(self,admit):
        if len(self.patients)<self.capacity:
            self.patients.append(admit)
            self.patients[len(self.patients)-1].bed=len(self.patients)
            print len(self.patients)
        else: 
            print "Full"
        return self
    def discharge(self,name):
        for i in range(0,len(self.patients)):
            if self.patients[i].name==name:
                del self.patients[i]
                self.patients[i].bed=0
        return self


p1=Patient(1,"Hollin","none")
p2=Patient(2,"DJ","Penuts")
p3=Patient(3,"Alex","Girls")

hospital=Hospital("Sacared Heart",2)

hospital.admit(p1).admit(p2).admit(p3)
p1.show()
print "\n"
p2.show()