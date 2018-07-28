var h1 = document.querySelector("h1");
var isBlue = false;
setInterval(function(){
    if (isBlue){
        h1.style.color = "white";
    } else {
        h1.style.color = "#3700b3";
    }
    isBlue = !isBlue;
}, 1000);