def make_dict(arr1, arr2):
    if len(arr1)>=len(arr2):
        x=arr1
        y=arr2
    else:
        x=arr2
        y=arr1
    new_dict = dict(zip(x,y))
        
    print new_dict
    return new_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas","tigers"]
make_dict(name,favorite_animal)