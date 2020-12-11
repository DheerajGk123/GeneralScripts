var Nodes = ["#n1","#n2","#n3","#n4","#n5","#n6","#n7","#n8","#n9","#n10","#n11","#n12","#n13","#n14","#n15","#n16","#n17","#n18","#n19","#n20","#n21","#n22","#n23","#24"];
var NodeLen = Nodes.length;
console.log(Nodes);
console.log(NodeLen);
var ih = $("#n1").children(".sdes").outerHeight() + 60 + "px";
console.log("oh = "+ih);
$("#n1").css("height",ih);
var active = 1;
var activeid = "#n1";

function EStoggle(id){
    if(active == 1 && activeid == id){
        $(id).css("height","60px");
        active = 0;
    }   
    else{                 
    for(var i=0; i<NodeLen; i++){
        $(Nodes[i]).css("height","60px");
    }
    var h = $(id).children(".sdes").outerHeight() + 60 + "px";
    console.log(h);
    $(id).animate({height:h},100);
    active =1;
    activeid = id;
    }
}
   


// $("#n1").css("height", ih);

// var Nodes = ["#n1","#n2","#n3","#n4","#n5","#n6","#n7","#n8","#n9","#n10","#n11","#n12","#n13","#n14","#n15","#n16","#n17","#n18","#n19","#n20","#n21","#n22","#n23"];
// var NodeLen = Nodes.length;
// console.log(Nodes);
// console.log(NodeLen);
// var active = 0;
// var activeid ="";
// var initialId = "#n1";
// var ih = $("#n1" + " > div").outerHeight() + 50 + "px";
// $("#n1").css("height", ih);

