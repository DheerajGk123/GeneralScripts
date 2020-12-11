var arroDh = $(".proName").outerHeight();
var proArr = ["#p1","#p2","#p3"];
var proArrLen = proArr.length;
var activep=1;
var activeidp = "#p1";
$(".projectMain").css("height",arroDh+"px");
$(".projectArrow").css("width",arroDh+"px");
$(".projectArrow").css("height",arroDh+"px");
$(".projectDes").css("margin-left",arroDh+"px");

var x = $("#p1").children(".projectDes").outerHeight();
x += arroDh;
$("#p1").css("height",x + "px");
$("#p1").children(".projectName").children(".projectArrow").children(".Arrow").css("transform","rotate(-135deg)");

function expandPro(obj){
    var arroDh = $(".proName").outerHeight();
    if(activep == 1 && activeidp == obj){
        $(obj).css("height",arroDh+"px");
        $(obj).children(".projectName").children(".projectArrow").children(".Arrow").css("transform","rotate(45deg)");
        activep=0;
    }
    else{
    for(var i=0; i< proArrLen;i++){
        $(proArr[i]).css("height",arroDh+"px");
        $(proArr[i]).children(".projectName").children(".projectArrow").children(".Arrow").css("transform","rotate(45deg)");
    }
    var x = $(obj).children(".projectDes").outerHeight();
    x += arroDh;
    $(obj).animate({height: x + "px"},200);
    $(obj).children(".projectName").children(".projectArrow").children(".Arrow").css("transform","rotate(-135deg)");
    activep = 1;
    activeidp = obj;
    }
}

// var headID = ["#h1","#h2","#h3"];
// var arrowID = ["#a1","#a2","#a3"];
// var pids = ["#p1id","#p2id","#p3id"];
// var Len = headID.length;
// for(var i=0; i<Len;i++){
//     var headH = $(headID[i]).outerHeight() + "px";
//     $(arrowID[i]).css("height",headH);
// } 
