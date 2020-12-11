var certiC;
var certiH;
updateC();
function updateC(){
     certiW = $(".certiC").outerWidth();
     certiH = certiW * (70/100);
    $(".certiC").css("height", certiH);
}

console.log("cW :" + certiW);
console.log("cW :" + certiH);

function openImg(iobj){
    $(".imgDisp").css("display","flex");
    $(".imgDisp").css("background-color","rgba(0, 0, 0, 0.85)");
    var bwid = $("#imgDD").outerWidth();
    var bhei = bwid * (60/100);
    $("#imgDD").css("height",bhei);
    var imgDOM = '<img src="' + iobj + '" width="100%" height="100%">';
    document.getElementById("imgDD").innerHTML = imgDOM;
}

function cancelIMG(){
    $(".imgDisp").css("display","none");
}