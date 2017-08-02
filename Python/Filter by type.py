def filter(val):
    if type(val) is int and val>=100:
        print "That's a big number!"
    elif type(val) is int and val<100:
        print "That's a small number."
    if type(val) is str and len(val)>=50:
        print "Long sentence."
    if type(val) is str and len(val)<50:
        print "Short sentence."
    if type(val) is list and len(val)>=10:
        print "Big list."
    if type(val) is list and len(val)<10:
        print "Short List"
test={'sI' : 45,'mI' : 100,'bI' : 455,'eI' : 0,'spI' : -23,'sS' : "Rubber baby buggy bumpers",'mS' : "Experience is simply the name we give our mistakes",'bS' : "Tell me and I forget. Teach me and I remember. Involve me and I learn.",'eS' : "",'aL' : [1,7,4,21],'mL' : [3,5,7,34,3,2,113,65,8,89],'lL' : [4,34,22,68,9,13,3,5,7,9,2,12,45,923],'eL' : [],'spL' : ['name','address','phone number','social security number']
}
for k,v in test.iteritems():
    print k
    print v
    filter(v)