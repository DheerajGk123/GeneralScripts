update();
function update(){
    var iw = parseInt(window.innerWidth);
    var ih = parseInt((35/100)*iw);
    var fs1 = parseInt((8/100)*iw);
    var cs = parseInt((2.5/100)*iw);
    var fs2 = parseInt((2/100)*iw);
    ih += "px";
    iw += "px";
    fs1 += "px";
    cs += "px";
    document.querySelector("#banner").style.width=iw;
    document.querySelector("#banner").style.height=ih;            
    document.querySelector("#Name").style.fontSize=fs1;       
    document.querySelector("#Caption").style.fontSize=cs;  
}