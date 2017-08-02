def filter(val):
    total=0.0
    string=""
    for i in range(0,len(val)):
        if type(val[i]) is int or type(val[i]) is float:
            total+=val[i]
    
        if type(val[i]) is str:
            string+=" "+val[i]

    if total == 0:
        print "The list you entered is of string type."
    else:
        print total
    if string == '':
        print "The list you entered is of integer type"
    else:
        print string
    if total!=0 and string!="":
        print "The list you entered is of mixed type."
       


first=[2,3,1,7,4,12]

filter(first)