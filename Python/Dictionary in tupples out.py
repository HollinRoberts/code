def tup(bob):
    x=()
    newlist=[]
    for key,value in bob.iteritems():
        print key
        print value
        x= key,value
        print x
        newlist.append(x)
        print newlist

my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"}

tup(my_dict)