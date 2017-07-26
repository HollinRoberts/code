var DaysUntilMyBirthday = 60

for(var i= DaysUntilMyBirthday; i>0;i--){
    if(i>30) {
        console.log(i, "days until my birthday. Such a long time... :(");
    }
    else if(i>=5) {
        console.log(i, "days until my birthday!");
    }
    else if(i<5) {
        console.log(i, "DAYS UNTIL MY BIRTHDAY!!!");
    }
}
console.log("HAPPY BIRTHDAY!!!!!");