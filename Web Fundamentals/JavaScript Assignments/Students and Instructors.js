var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

for(var key in users){
  var list = users[key]
  console.log(key);
    for(var i=0; i<list.length;i++)
    {
        var length = 0
        length= list[i].first_name.length+length;
        length= list[i].last_name.length+length;
        console.log((i+1)+ " - " + list[i].first_name+ " " +list[i].last_name + " - " + length);
    }
}