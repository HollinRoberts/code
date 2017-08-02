def find_characters(list,char):
    newlist=[]
    for i in range(0,len(list)):
        if list[i].find(char)!=-1:
            newlist.append(list[i])
    print newlist
find_characters(['hello','world','my','name','is','Anna'],'o')
