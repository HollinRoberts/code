def coin_toss(times):
    import random
    num=0
    heads=0
    tails=0
    for i in range(1,times+1):
      
        
        
        num = random.randint(0,1)
        if num==0:
            heads+=1
            print "Attempt #"+str(i)+": Throwing a coin... It's a head! Got "+str(heads)+" head(s) so far and "+str(tails)+" tail(s) so far."
        if num==1:
            tails+=1
            print "Attempt #"+str(i)+": Throwing a coin... It's a tail! Got "+str(tails)+" tail(s) so far and "+str(heads)+" head(s) so far."
        
coin_toss(5000)