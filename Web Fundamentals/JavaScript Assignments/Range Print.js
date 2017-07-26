function printRange(start,end,skip){
var temp=0;
  if(skip===undefined){
    skip=1;
} 
if(end===0){
    end=start;
    start=0;
} 
if(end<start){
  temp=end;
  end=start;
  start=temp;
}
for(var i=start;i<end;i+=skip){
    console.log(i);
    }
}

printRange(50,10,2)