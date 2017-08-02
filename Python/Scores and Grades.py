def grades():
    import random
    num=0
    for i in range(0,11):
        
        num = random.randint(60,100)
        if 60<=num<=69:
            print "Score:"+str(num)+"; Your grade is D"
        if 70<=num<=79:
            print "Score:"+str(num)+"; Your grade is C"
        if 79<num<=89:
            print "Score:"+str(num)+"; Your grade is B"
        if 89<num<=100:
            print "Score:"+str(num)+"; Your grade is A"
grades()