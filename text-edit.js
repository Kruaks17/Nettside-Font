/*--------------------------------------------------------------------
Funksjoner for input som skal endre størrelse, mellomrom mellom ord, 
høyde på font og font weigth
---------------------------------------------------------------------*/
function updateSize(){
    var v = document.getElementById("sizeInput").value;
    document.getElementById("fontTester").style.fontSize=v+"px";
    document.getElementById("size").innerHTML= v + "px";
}
function updateSpacing(){
    var v= document.getElementById("spacingInput").value;
    document.getElementById("fontTester").style.letterSpacing=v + "px";
    document.getElementById("spacing").innerHTML = v + "px";
}
function updateHeight(){
    var v= document.getElementById("heightInput").value;
    document.getElementById("fontTester").style.lineHeight= v + "px";
    document.getElementById("height").innerHTML = v + "px";
}
function updateWeight(){
    var v = document.getElementById("weightInput").value;
    document.getElementById("fontTester").style.fontWeight= v;
}

$(document).ready(function(){

    var size = 80;
    var height = 90;

    if($(window).width() <990){
        size=65;
        height=65;
    }
    if ($(window).width() <750){
        size=48;
        height=90;
    }

    document.getElementById("height").innerHTML= height + "px";
    document.getElementById("heightInput").value= height;

    document.getElementById("size").innerHTML= size + "px";
    document.getElementById("sizeInput").value=size;

});


