function gamble(quarters){
    while(quarters>0){
        quarters--;
        var slot=Math.floor(Math.random()*100);
        var roll=Math.floor(Math.random()*100);
        if(slot===roll){
            var win=Math.floor(Math.random()*50)+51;
            quarters=quarters+win;
            console.log("You won! You have "+quarters+"!");
        }  
    }
  console.log("you're broke");
}
gamble(100)