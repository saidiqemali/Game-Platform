// Function dass der Button sich random bewegt
function moveButtonRandom(button) {
    button.style.position = 'absolute';
    button.style.top = Math.floor(Math.random() * 500) + 'px'; // button bewegt sich random
    button.style.left = Math.floor(Math.random() * 900) + 'px'; // button bewegt sich random
}

//die variabl button
let button = document.querySelector('#button'); // button auswälen


button.addEventListener('mouseenter', function(e) { moveButtonRandom(e.target); }); // wenn mit button drüber, wird die function moveButtonRandom ausgführt

//geschafft clicken
button.addEventListener('click', function(e) { alert('Gewonnen'); });

let count = 0; // zehlt wie viel mal schon gelickt worden ist
document.onclick = function() {
    count += 1;
    if (count > 9) { // wenn count also clicks 10 sind
        alert('Zu viel Versuche');
        window.location.reload(); // wenn enter druckst seite ladet neu
    }
}