words = "It's thanksgiving day. It's my birthday, too!"
def find_and_replace(str):
    result= str
    print str.find('day')
    result = str.replace('day','month',1)
    print result 
find_and_replace(words)

x=[2,54,-2,7,12,98]
def min_max(str):
    max=str[0]
    min=str[0]
    for i in range(0,len(str)):
        if str[i]>max:
            max=str[i]
        if str[i]<min:
            min=str[i]
    print max
    print min
min_max(x)

x = ["hello",2,54,-2,7,12,98,"world"]
def first_last(str):
    new=[]
    new.append(str[0])
    new.append(str[len(str)-1])
    print new
first_last(x)

x = [19,2,54,-2,7,12,98,32,10,-3,6]
def new_list(str):
    new=[]
    second=[]
    str.sort()
    for i in range(0,len(str)/2):
        new.append(str[i])
    second.insert(0,new)
    for i in range((len(str)/2),len(str)):
        second.append(str[i])
    return second
print new_list(x)