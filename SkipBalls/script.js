document.onmousemove = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById('ball').style.marginLeft = x + "px";
    document.getElementById('ball').style.marginTop = y + "px";

}