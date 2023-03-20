var canvas = document.getElementById("canvas");
var gradient = document.getElementById("gradient");
var gradientText = document.getElementById("gradientText");

function createGradient() {
    var firstColorRed = Math.floor(Math.random() * 256);
    var firstColorGreen = Math.floor(Math.random() * 256);
    var firstColorBlue = Math.floor(Math.random() * 256);

    var secondColorRed = Math.floor(Math.random() * 256);
    var secondColorGreen = Math.floor(Math.random() * 256);
    var secondColorBlue = Math.floor(Math.random() * 256);

    var generatedGradient;
    if(gradient.value == "linear__gradient") {
        gradientText.value = "linear-gradient(to right, rgb("+firstColorRed+", "+firstColorGreen+", "+firstColorBlue+"),"+
         "rgb("+secondColorRed+", "+secondColorGreen+", "+secondColorBlue+"))";
    } else if(gradient.value == "radial__gradient") {
        gradientText.value = "radial-gradient(rgb("+firstColorRed+", "+firstColorGreen+", "+firstColorBlue+"),"+
         "rgb("+secondColorRed+", "+secondColorGreen+", "+secondColorBlue+"))";
    } else if(gradient.value == "conic__gradient") {
        gradientText.value = "conic-gradient(rgb("+firstColorRed+", "+firstColorGreen+", "+firstColorBlue+"),"+
         "rgb("+secondColorRed+", "+secondColorGreen+", "+secondColorBlue+"))";
    }
    canvas.style.background = gradientText.value;
}

function copyGradientText() {
    var copyGradient = document.querySelector("#gradientText");
    copyGradient.select();
    document.execCommand("copy");
    alert("Successfully Copy!");
}