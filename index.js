var h1 = document.querySelector("h1");
var isBlue = false;
setInterval(function () {
    if (isBlue) {
        h1.style.color = "black";
    } else {
        h1.style.color = "#2c0084";
    }
    isBlue = !isBlue;
}, 1000);