def draw_stars(list):
    for i in range(0,len(list)):
        print list[i]*'*'
x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

print'\n'

def draw_stars2(list):
    for i in range(0,len(list)):
        if type(list[i]) is int:
            print list[i]*'*'
        if type(list[i]) is str:
            print list[i][0]*len(list[i])
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars2(x)
