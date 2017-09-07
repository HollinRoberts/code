(function(global){
    global.$Dojo= function(id){
            var button = document.getElementById(id);
            button.click= function(cb){
                button.addEventListener("click",cb);
            }
            button.hover = function(cb1,cb2){
                button.addEventListener("mouseover",cb1);
                button.addEventListener("mouseout",cb2);
                
            }
    return button
    }
     
    // global.$Dojo=$Dojo
}(window));