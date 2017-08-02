# def odd_even(count):
#     for i in range(1,count+1):
#         if i%2==1:
#             print "Number is "+ str(i) + ". This is an odd number."
#         if i%2==0:
#             print "Number is "+ str(i) + ". This is an even number."

# odd_even(2000)

def multiply(list,value):
    for i in range(0,len(list)):
        (list[i])*=value
    return list

a=[2,4,10,16]
b=multiply(a,5)
# print b 


def layered_multiples(arr):
    temp=[]
    for i in range(0,len(arr)):
        temp=[]
        for x in range (0,arr[i]):
           temp.append(1)
           arr[i]=temp
           print arr
      
    return arr
x = layered_multiples(multiply([2,4,5],3))
print x