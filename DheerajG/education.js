var eduCol1Wid = $(".eduCol1").width();
$(".eduCol1").css("height",eduCol1Wid + "px");
$(".e1").css("fontSize",(eduCol1Wid*(7/100))+"px");
$(".e2").css("fontSize",(eduCol1Wid*(5/100))+"px");

function updateEdu(){
    var eduCol1Wid = $(".eduCol1").width();
    $(".eduCol1").css("height",eduCol1Wid + "px");
    $(".e1").css("fontSize",(eduCol1Wid*(7/100))+"px");
    $(".e2").css("fontSize",(eduCol1Wid*(5/100))+"px");

}