class Call(object):
    def __init__(self,unique_id,caller_name,caller_phone_number,time_of_call, reason_for_call):
        self.unique_id=unique_id
        self.caller_name=caller_name
        self.caller_phone_number=caller_phone_number
        self.time_of_call=time_of_call
        self.reason_for_call=reason_for_call
    def display(self):
        print self.unique_id
        print self.caller_name
        print self.caller_phone_number
        print self.time_of_call
        print self.reason_for_call

class CallCenter(object):
    def __init__(self):
        self.calls=[]
        self.queue_size=len(self.calls)
    def add(self,add):
        self.calls.append(add)
        self.queue_size+=1
        return self
    def remove(self):
        del self.calls[0]
        return self
    def remove_by_number(self,phone_number):
        for x in range(0,len(self.calls)):
            if self.calls[x].caller_phone_number==phone_number:
                del self.calls[x]
        return self
    def info(self):
        for i in range(0,len(self.calls)):
            print self.calls[i].caller_name
            print self.calls[i].caller_phone_number
            "\n"
        return self
    
    def sort(self):
        for index in range(1,len(self.calls)):
    
            currentvalue = self.calls[index]
            print currentvalue
            position = index

            while position>0 and self.calls[position-1].time_of_call>currentvalue.time_of_call:
                self.calls[position]=self.calls[position-1]
                position = position-1

            self.calls[position]=currentvalue
        return self






a=Call(1,"bob",7072876565,745,"it's broken")
a1=Call(2,"james",7072875555,45,"it's broken")
a2=Call(3,"dj",7075555555,465,"it's broken")

b=CallCenter()
b.add(a).add(a1).add(a2).sort().info()
