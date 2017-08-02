def dictionary(bob):
    for key, value in bob.iteritems():
        print "My "+key+" is "+value

x={"name": "Hollin Roberts", "age": "34", "country of birth": "United States", "favorite language": "Python"}
dictionary(x)
