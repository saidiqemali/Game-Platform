// random position der button
function moveElmRand(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 40 + 5) + '%';
    elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

//die variabl button
var button = document.querySelector('#button');


button.addEventListener('mouseenter', function(e) { moveElmRand(e.target); });

//wenn geschafft hast clicken
button.addEventListener('click', function(e) { alert('Gewonnen'); });

count = 0;
document.onclick = function() {
    count += 1;
    if (count > 10) {
        alert('Zu viel Versuche');
        window.location.reload();
    }
}