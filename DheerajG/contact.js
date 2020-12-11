var contH = $(".disRnot").outerHeight();
var active = 0;
$(".contact").css("height","20px");
console.log("hhhh:"+contH);
setTimeout(function(){
    contactExp();
},10000);

function contactExp(){
    if(active == 1){
    $(".contact").animate({height:"20px"},500);
    setTimeout(function(){},1000);
    $(".tri").css("transform","rotate(360deg)");
    active = 0;
    }
    else{
        $(".contact").animate({height:contH +20 + "px"},500);
        $(".tri").css("transform","rotate(180deg)");
        active = 1;
    }
}