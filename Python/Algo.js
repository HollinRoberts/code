function reverse(str){
    var newstring="";
    for(var i = str.length-1; i>=0;i--){
        newstring+=str[i];
    }
return newstring;
}

console.log(reverse("hollin"));

function insertAt(str,index,insertStr){
    var newstring="";
    for(var i=0; i<str.length;i++){
        newstring+=str[i];
        if (i===index){
            for(var x=0;x<insertStr.length;x++){
                newstring+=insertStr[x];
            }
        }
    }
    return newstring;
}

console.log(insertAt('hollin',4,'roberts'));