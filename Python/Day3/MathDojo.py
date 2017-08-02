class MathDojo(object):
    def __init__(self):
        self.md=0
        
    def add(self,a=0,b=0,c=0):
        if type(a) is tuple:
            a=list(a)
            print a
        if type(b) is tuple:
            print b
            b=list(b)
        if type(c) is tuple:
            print c
            c=list(c)
        if type(a) is list:
            print a
            a=sum(a)
        if type(b) is list:
            print b
            b=sum(b)
        if type(c) is list:
            print c
            c=sum(c)    
        self.md+=(a+b+c)
        print self.md
      
        return self
    def subtract(self,a=0,b=0,c=0):
        if type(a) is tuple:
            a=list(a)
        if type(b) is tuple:
            b=list(b)
        if type(c) is tuple:
            c=list(c)
        if type(a) is list:
            a=sum(a)
        if type(b) is list:
            b=sum(b)
        if type(c) is list:
            c=sum(c)
        
        self.md-=a
        print self.md
        self.md-=b
        print self.md
        self.md-=c
        print self.md
        
        return self
    def result(self):
        print self.md
        return self.md
        self.md=0

md= MathDojo()
md1=MathDojo()
md2=MathDojo()
md.add(2).add(2,5).subtract(3,2).result()
md1.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()
md2.add([1],(3,4)).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()

