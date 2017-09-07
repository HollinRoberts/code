(function(global){
    var Dojo = {
        create: function() {
            console.log('in create');
            button = document.createElement("button");
            button.id="dojo";
            button.textContent='Dojo';
            var element= document.getElementById('here');
            element.appendChild(button);
            Dojo.listeners()
        },
        listeners: function(){
            console.log('in listeners')
            var button = document.getElementById("dojo");
            button.addEventListener("click",click);
            function click(){
                alert("clicked");
            }
            button.addEventListener("mouseover",over);
            function over(){
                console.log("moused over");
            }
            button.addEventListener("mouseout",out);
            function out(){
                console.log("moused off");
            }
        }
    }
    Dojo.create()
}());