const quizFragen = [{
    frage: "Wie lange dauert der 30-jährige Krieg?",
    A: "30 Jahre",
    B: "29 Jahre",
    C: "300 Jahre",
    D: "31 Jahre",
    richtig: "30 Jahre",
}, {
    frage: "Einige Monate haben 30, einige 31 Tage. Wie viele haben 28 Tage?",
    A: "Alle",
    B: "1",
    C: "0",
    D: "2",
    richtig: "Alle",
}, {
    frage: "Wie viele Buchstaben hat das hawaiianische Alphabet?	",
    A: "13",
    B: "45",
    C: "23",
    D: "12",
    richtig: "12",
}, {
    frage: "Welches Land ist flächenmäßig das zweitgrößte der Erde?",
    A: "USA",
    B: "China",
    C: "Kanada",
    D: "Russland",
    richtig: "Kanada",
}, {
    frage: "Welches ist die größte Stadt der Welt?	",
    A: "New York",
    B: "Paris",
    C: "Los Angeles",
    D: "Mexiko-City",
    richtig: "Mexiko-City",
}, {
    frage: "Wie heißt die Hauptstadt von Brasilien?	",
    A: "Rio de Janeiro",
    B: "Brasilia",
    C: "Brassilia",
    D: "Fontolos",
    richtig: "Brasilia",
}, {
    frage: "In welchem Jahr war die Einführung des Euro?",
    A: "2002",
    B: "2000",
    C: "1999",
    D: "2001",
    richtig: "2002",
}, ]


//das sind knöpf
const quiz = document.getElementById("quiz")
const antworten = document.querySelectorAll(".antwort")
const fragen = document.getElementById("frage")
const ersteOption = document.getElementById("ersteOption") // elemente usehole vo html
const zweiteOption = document.getElementById("zweiteOption")
const dritteOption = document.getElementById("dritteOption")
const vierteOption = document.getElementById("vierteOption")

const antwortenAbschiken = document.getElementById("abschiken")

let aktuelleQuizz = 0
let punkte = 0


loadQuiz()

function loadQuiz() {

    const aktuelleQuizzquiFragen = quizFragen[aktuelleQuizz]

    fragen.innerText = aktuelleQuizzquiFragen.frage // mit inner text werden die fragen bearbeitet
    ersteOption.innerText = aktuelleQuizzquiFragen.A // mit inner text werden die buchstaben A bearbeitet also text vom knopf ihgsetzt
    zweiteOption.innerText = aktuelleQuizzquiFragen.B // mit inner text werden die buchstaben A B bearbeitet
    dritteOption.innerText = aktuelleQuizzquiFragen.C // mit inner text werden die buchstaben C  bearbeitet
    vierteOption.innerText = aktuelleQuizzquiFragen.D // mit inner text werden die buchstaben D bearbeitet
}

function getAuswahl() {
    let antwort

    antworten.forEach((antwort1) => { // luegt jedi antworte und luegt welli ugwählt worde ish
        if (antwort1.checked) {
            antwort = antwort1.id
        }
    })
    return antwort
}
antwortenAbschiken.addEventListener("click", () => { // macht en listener wo luegt ob clickt worde ish
    const antwort = getAuswahl()

    if (antwort) {
        if (antwort.value == quizFragen[aktuelleQuizz].richtig) { // wenn die antwort richtig ist also wenn die variabele richtig mit dein er auwahl stimmt
            punkte++
        }
        aktuelleQuizz += 1 // gaht zum nächste wuiz
    }
    if (aktuelleQuizz < quizFragen.length) { //macht wiiter bis uf 7 will 7 sind quizFragen.lentgh also wie viel fragen
        loadQuiz()
    } else {
        quiz.innerHTML = `<h2> Du hast ${punkte}
        Fragen von 7 richtig beantwortet </h2>`
    } // tuet das usgeh als "else" wenn alles fertig ish
})