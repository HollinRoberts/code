# def names(bob):
#     for i in range(0,len(bob)):
#         name =""
#         for key, value in bob[i].iteritems():
#             name=name+" "+value
#         print name
# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
# names(students)

def names2(bob):
    for key,value in bob.iteritems():
        print key
        for i in range(0,len(value)):
            name =""
            for pos, v2 in value[i].iteritems():
                name=name+" "+v2
            print str(i) +"- "+name+" - " + str(len(name))
users={
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}]}
names2(users)