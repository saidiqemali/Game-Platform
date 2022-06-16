let me;
let myScore = 0;
let enemy;
let enemyScore = 0;

var choices = ["Rock", "Paper", "Scissor"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img"); // wenn mer ufs bild clickt denn wird das bild id liste vo dem array choices inetah und die wahl wird unter de varibalme me geschpeicheret
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    debugger
    me = this.id;
    document.getElementById("myChoice").src = me + ".png";

    // gegner (computer) funktion random
    enemy = choices[Math.floor(Math.random() * 3)];
    document.getElementById("enemyChoice").src = enemy + ".png";

    // wer hat gewonnen
    switch (me) {
        case "Rock":
            if (enemy == "paper") {
                enemyScore += 1;
            } else if (enemy == "Scissor") {
                myScore += 1;
            } else {
                myScore += 0;
                enemyScore += 0;
            }
            break;

        case "paper":
            if (enemy == "paper") {
                myScore += 0;
                enemyScore += 0;
            } else if (enemy == "Scissor") {
                enemyScore += 1;
            } else {
                enemyScore += 1;
            }
            break;

        case "Scissor":
            if (enemy == "paper") {
                myScore += 1;
            } else if (enemy == "Scissor") {
                myScore += 0;
                enemyScore += 0;
            } else {
                enemyScore += 1;
            }
            break;
    }

    console.log(enemy);

    document.getElementById("myScore").innerText = myScore;
    document.getElementById("enemyScore").innerText = enemyScore;
}