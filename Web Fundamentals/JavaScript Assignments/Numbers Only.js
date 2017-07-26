function numbersOnly(arr)
{   
    var arrnew = [];
    for(var i=0;i<arr.length;i++)
    {
        if(typeof arr[i]==="number")
        {
            arrnew.push(arr[i]);
        }
    }
    return arrnew;
}
console.log(numbersOnly(["hollin",4,5]))