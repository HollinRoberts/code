var hour = 7;
var minute = 15;
var period = "PM";
if(period == "AM" && minute<30)
{
    console.log("It's just after", hour, "in the morning.")
}
else if(period =="AM" && minute>30)
{
    console.log("It's just before", (hour+1), "in the morning.")
}
if(period == "PM" && minute<30)
{
    console.log("It's just after", hour, "in the evening.")
}
else if(period == "PM" && minute>30)
{
    consol.log("It's just before", (hour+1), "in the evening.")
}