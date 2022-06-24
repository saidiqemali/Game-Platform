document.onmousemove = function(e) { // immer wenn mouse bewegt wird, wird die funciotn ausgeführt
    var x = e.clientX; // mouse x seite rausholen
    var y = e.clientY;
    document.getElementById('ball').style.marginLeft = x + "px"; //ball bekommt x wert vom mouse
    document.getElementById('ball').style.marginTop = y + "px"; //ball bekommt y wert vom mouse

}