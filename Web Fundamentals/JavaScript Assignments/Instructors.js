var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]


    for(var i= 0; i<students.length;i++){
        console.log(students[i].first_name+ " " +students[i].last_name)
    }



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
    for(var first_name in key){}
    var first = first_name;
    var last = last_name;
    var length = (first.length+last.length);
    console.log((i+1)+ " - " + key[i].first_name+ " " +key[i].last_name + " - " + length);
    }
}