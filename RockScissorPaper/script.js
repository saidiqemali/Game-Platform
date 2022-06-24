var choices = ["Rock", "Paper", "Scissor"];

window.onload = function() { // beim neuladen
        for (let i = 0; i < 3; i++) {
            let choice = document.createElement("img");
            choice.id = choices[i];
            choice.src = choices[i] + ".png"; //erstellt für schär stein papier 1 bild
            choice.addEventListener("click", selectChoice); //wenn geclickt wird, wird die function selectChoice ausgführt
            document.getElementById("choices").append(choice);
        }
    } // 3 uswahl werden erstellt, mit bilder

function selectChoice() {

    let me; // mein id
    me = this.id;
    document.getElementById("myChoice").src = me + ".png";

    let enemy;
    // gegner (computer) funktion random
    enemy = choices[Math.floor(Math.random() * 3)]; // gegner wöhlt automatisch scher stein paier ,,, mal 3 wills 3 sind (scher stei paier)
    document.getElementById("enemyChoice").src = enemy + ".png";




    let myScore = 0;
    let enemyScore = 0;

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


    document.getElementById("myScore").innerText = myScore;
    document.getElementById("enemyScore").innerText = enemyScore;
}