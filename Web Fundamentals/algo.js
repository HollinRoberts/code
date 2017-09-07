function reverse(arr){
    newarr=[];   
    for(var i=arr.length-1; i>=0; i--){
        newarr.push(arr[i]);
    }
    console.log(newarr)
}

reverse([1,2,3])

function find(arr,val){
    for(var i =0;i<arr.length;i++){
        if(arr[i]===val){
            console.log(i)}
    }
    

}
find ([1,2,3,4],3)


function insert(arr,index,val){
    for(var i =arr.length-1;i>=index;i--){
        arr[i+1]=arr[i]
        }
    arr[index]=val
    console.log(arr)
}
insert[]