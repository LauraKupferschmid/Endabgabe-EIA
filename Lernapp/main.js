var Endaufgabe;
(function (Endaufgabe) {
    // Madeleine Hansen hat mich auf die Idee mit dem Interface gebracht
    //Interface für Fragen erstellen
    //Fragen für HTML
    let HTML_Fragen = [
        {
            question: ["wer ist besser htm", "FRage2html", "FRage3html", "Frage4 ht", "Frage5html"],
            antworten_richtig: ["antwort1", "antwort2", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheant2", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"]
        },
    ];
    //Kontrolle von HTML_Fragen
    console.log(HTML_Fragen[0].antworten_richtig[1]);
    //Fragen für CSS
    let CSS_Fragen = [
        {
            question: ["wer ist besser css", "FRage2 css", "FRage3 css", "Frage4 css", "Frage5 css"],
            antworten_richtig: ["antwort1", "antwort2 css", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheant2 css lol", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere falsche anwort css again lol", "falsche ant3", "4te falsche an", "falsche die 5te"]
        },
    ];
    //Kontrolle von CSS_Fragen
    console.log(CSS_Fragen[0].anwser_false1[2]);
    //Fragen für Typescript
    let TS_Fragen = [
        {
            question: ["wer ist besser", "FRagets2", "FRage3", "Frage4", "Frage5"],
            antworten_richtig: ["antwort1", "antwortts2", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheantts2", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere ts falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"]
        },
    ];
    //[[antwortbla, antwortbla2,antwort],[ddgdg]] 
    //Div boxendeklarieren um classlist.add und remuve zu machen
    let katbox = document.querySelector("#kategoriebox");
    let frabox = document.querySelector("#frageseite");
    //Kontrolle von TS_Fragen
    console.log(TS_Fragen[0].anwser_false2[3]);
    //Headline Element für Fragen erstellen mit TS//
    let frage = document.createElement("headline1");
    frage.classList.add(".frage");
    document.querySelector(".Frage").appendChild(frage);
    //Buttons für Antworten erstellen mit TS
    let antwort1 = document.createElement("button");
    antwort1.classList.add('antwortfeld1');
    document.querySelector(".Antworten").appendChild(antwort1);
    let antwort2 = document.createElement("button");
    antwort2.classList.add('antwortfeld2');
    document.querySelector(".Antworten").appendChild(antwort2);
    let antwort3 = document.createElement("button");
    antwort3.classList.add('antwortfeld3');
    document.querySelector(".Antworten").appendChild(antwort3);
    let weiter = document.createElement("button");
    weiter.classList.add('weiterbtn');
    weiter.innerHTML = "Weiter";
    document.querySelector(".Weiter").appendChild(weiter);
    let buttonsarr = [antwort1, antwort2, antwort3];
    const shuffle = (buttonsarr) => {
        let m = buttonsarr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [buttonsarr[m], buttonsarr[i]] = [buttonsarr[i], buttonsarr[m]];
        }
        return buttonsarr;
    };
    console.log(shuffle(buttonsarr));
    //auf den klick auf eine kategorie soll die klasse zugewiesen und entfernt werden.
    //document.querySelector("#htmlbtn").addEventListener('click',function(){})
    //html button wird geklickt also sollen die fragen aus HTML_Fragen geladen werden. 
    //dabei soll der index math.random sein damit die fragen zufällig ausgeschmissen werden.
    //if html button geklickt wird soll das passieren
    // if css button... und so weiter
    let index = Math.round(Math.random() * 4);
    document.querySelector('#htmlbtn').addEventListener('click', function () {
        //klasse entfernen und zuweisen
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        // innerhtml zuweisen
        frage.innerHTML = HTML_Fragen[0].question[index];
        antwort1.innerHTML = HTML_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = HTML_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = HTML_Fragen[0].anwser_false2[index];
    });
    document.querySelector("#cssbtn").addEventListener('click', function () {
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        frage.innerHTML = CSS_Fragen[0].question[index];
        antwort1.innerHTML = CSS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = CSS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = CSS_Fragen[0].anwser_false2[index];
    });
    document.querySelector("#tsbtn").addEventListener('click', function () {
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        frage.innerHTML = TS_Fragen[0].question[index];
        antwort1.innerHTML = TS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = TS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = TS_Fragen[0].anwser_false2[index];
    });
    document.querySelector("#gmbtn").addEventListener('click', function () {
        katbox.classList.add('hidden'),
            frabox.classList.remove('hidden');
        function setall() {
            console.log("test hallo :)");
        }
        setall;
    });
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=main.js.map