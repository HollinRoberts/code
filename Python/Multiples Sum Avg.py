# print all odds from 1-1000

def multiple(max):
    for i in range(1,max+1):
        if i%2==1:
            print i
multiple(1000)

# print all multiples of 5 from 5 to 1,000,000

def multiple5(start,max,step):
    for i in range(start,max+1,step):
        print i
multiple5(5,1000000,5)

#sum all values in a list
total=0
def sum_list(list):
    print sum(list)
sum_list([1,2,5,10,255,3])

#average a list

def average(list):
    print sum(list)/len(list)
average([1, 2, 5, 10, 255, 3])