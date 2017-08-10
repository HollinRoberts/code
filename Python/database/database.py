class UserDB (object):
    def __init__ (self):
        self.data = []
        self.idCount = 0
    def create(self, name, age):
        
        self.data.append(User(name,age,self.idCount))
        self.idCount+=1
        return self
   
    def all(self):
        return self.data
    
    def get(self,name):
        for user in self.data:
            if user.name == name:
                return user
        return False
    
    def filter(self,name):
        returnList = []
        for users in self.data:
            if users.name == name:
                returnList.append(users)
        return returnList
    
    def exclude(self,name):
        returnList = []
        for users in self.data:
            if users.name != name:
                returnList.append(users)
        return returnList  
    
    def delete(self,name):
        for users in self.data:
            if users.name == name:
                self.data.remove(users)
        return self
    

class User (object):
    def __init__ (self,newName,newAge,newId):
        self.name=newName
        self.age=newAge
        self.id=newId
    def __repr__(self):
        return '< User Object userId:{} name:{} age {}>'.format(self.id,self.name,self.age)

mydb=UserDB()
mydb.create('joe','10').create('bill','30')
print mydb.all()
print mydb.filter('joe')
print mydb.exclude('joe')

print mydb.get('joe')
