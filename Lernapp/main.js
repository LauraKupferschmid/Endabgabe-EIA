var Endaufgabe;
(function (Endaufgabe) {
    const sound0 = new Audio("./Sounds/A.mp3"); //sounddateien einbinden in ts um sie für addEventlistener zu verwenden
    function playsample(s) {
        s.play();
    }
    let richtigbeantwortet = [];
    let richtgeantwort1 = [];
    let falscheantwort1 = [];
    let falscheantwort2 = [];
    //let falschbeantwortet: Frage[] = []
    //Fragen für HTML
    let HTML_Fragen = [
        {
            question: ["Wofür werden Tags verwendet?", "Wie wird das semantische Skelett einer HTML bezeichnet?", "Was ist der DOM?", "Welches Element ist Bestandteil des DOMS?", "Was sind Attribute eines Tags?"],
            antworten_richtig: ["Zur semantischen Strukturierung einer HTML.", "DOM.", "eine Daten-Schnittstelle für Browser und Seite", "Kind", "value"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Zum kommentieren des HTMLs.", "TS.", "ein Baum.", "Cousinen", "body"],
            anwser_false2: ["Zum Erstellen des Typscripts", "JS.", "ein Dateiformat.", "Tochter", "img"],
            explanation: ["erklärungspingu1", "erklärungspingu2", "erklärungspingu3", "erklärungspingu4", "erklärungspingu der fünfte"],
        },
    ];
    console.log(HTML_Fragen[0].antworten_richtig[1]); //Kontrolle von HTML_Fragen
    //Fragen für CSS
    let CSS_Fragen = [
        {
            question: ["Wofür steht CSS", "Wofür wird CSS verwendet", "Welcher Tag wird verwendet um das HTML mit dem CSS zu verbinden?", "Mit welcher Klammer werden Anweisungen an CSS übergeben?", "Woraus besteht ein CSS Deklaration?"],
            antworten_richtig: ["Cascading Style Sheets", "zur Manipulation der Darstellung von Elementen.", "link", "()", "Eigenschaft und Wert"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Color Styling Statistic", "zur Manipulation des DOMs.", "a", "[]", "Tag und href"],
            anwser_false2: ["Command Style Sheet", "zur Manipulation des Browsers.", "p", "{}", "style und value"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
    ];
    console.log(CSS_Fragen[0].anwser_false1[2]); //Kontrolle von CSS_Fragen
    //Fragen für Typescript
    let TS_Fragen = [
        {
            question: ["Wie wird Javascript in HTML eingebunden?", "Welche Dateiendung muss das Dokument haben, das in das HTML eingebunden wird?", "Woraus besteht eine Deklaration?", "Welches dieser Antworten ist ein Typ von TS?", "Wie kann man die Skript-Ladereihenfolge verändern?"],
            antworten_richtig: ["script-tag", ".js", "Schlüsselwort, Bezeichnung, Typ", "boolean", "defer"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["link-tag", ".ts", "Tags, links und Attributs", "age", "content"],
            anwser_false2: ["a-tag", ".html", "Eigenschaft, Wert und Klammern", "parameter", ".log"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
    ];
    console.log(TS_Fragen[0].anwser_false2[3]); //Kontrolle von TS_Fragen
    let GM_Fragen = [
        {
            question: ["Wofür werden Tags verwendet?", "Wie wird das semantische Skelett einer HTML bezeichnet?", "Was ist der DOM?", "Welches Element ist Bestandteil des DOMS?", "Was sind Attribute eines Tags?", "Wofür steht CSS?", "Wofür wird CSS verwendet?", "Welcher Tag wird verwendet um das HTML mit dem CSS zu verbinden?", "Mit welcher Klammer werden Anweisungen an CSS übergeben?", "Woraus besteht ein CSS Deklaration?", "Wie wird Javascript in HTML eingebunden?", "Welche Dateiendung muss das Dokument haben, das in das HTML eingebunden wird?", "Woraus besteht eine Deklaration?", "Welches dieser Antworten ist ein Typ von TS?", "Wie kann man die Skript-Ladereihenfolge verändern?"],
            antworten_richtig: ["Zur semantischen Strukturierung einer HTML.", "DOM.", "eine Daten-Schnittstelle für Browser und Seite", "Kind", "value", "Cascading Style Sheets", "zur Manipulation der Darstellung von Elementen.", "link", "()", "Eigenschaft und Wert", "script-tag", ".js", "Schlüsselwort, Bezeichnung, Typ", "boolean", "defer"],
            anwser_true: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            anwser_false1: ["Zum kommentieren des HTMLs.", "TS.", "ein Baum.", "Cousinen", "body", "Color Styling Statistic", "zur Manipulation des DOMs.", "a", "[]", "Tag und href", "link-tag", ".ts", "Tags, links und Attributs", "age", "content"],
            anwser_false2: ["Zum Erstellen des Typscripts", "JS.", "ein Dateiformat.", "Tochter", "img", "Command Style Sheet", "zur Manipulation des Browsers.", "p", "{}", "style und value", "a-tag", ".html", "Eigenschaft, Wert und Klammern", "parameter", ".log"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te", "noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te", "noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
    ];
    console.log(GM_Fragen[0].anwser_false2[9]);
    //idee zum shuffeln der antworten, funktioniert aber nicht und ich weiß nicht wieso
    /* let buttonsarr: = [antwort1,antwort2,antwort3]
   
     const shuffle = (buttonsarr)=>{
         let m = buttonsarr.length;
         while(m){
             const i = Math.floor(Math.random()*m--);
             [buttonsarr[m],buttonsarr[i]]=[buttonsarr[i],buttonsarr[m]]
         }
         return buttonsarr}
 
     const randshuff = shuffle(buttonsarr)
   
     console.log(shuffle(buttonsarr))*/
    let counter = document.createElement("paragragh"); //Punkte counter wird erstellt
    counter.classList.add('hidden');
    let rp = 0;
    counter.innerHTML = "P: " + rp;
    document.querySelector(".Counter").appendChild(counter);
    let katbox = document.querySelector("#kategoriebox"); //Div boxendeklarieren um classlist.add und remove zu machen
    let frabox = document.querySelector("#frageseite");
    let antbox = document.querySelector('#Antwortboxen');
    let frage = document.createElement("headline1"); //Headline Element für Fragen erstellen mit TS
    frage.classList.add(".frage");
    document.querySelector(".Frage").appendChild(frage);
    let antwort1 = document.createElement("button"); //Buttons für Antworten erstellen mit TS
    antwort1.classList.add('antwortfeld1');
    antwort1.setAttribute('id', 'antwort1');
    document.querySelector(".Antworten").appendChild(antwort1);
    let antwort2 = document.createElement("button"); //Antworfeld 2 wird erstellet
    antwort2.classList.add('antwortfeld2');
    antwort2.setAttribute('id', 'antwort2');
    document.querySelector(".Antworten").appendChild(antwort2);
    let antwort3 = document.createElement("button"); //Antwortfeld 3 wird erstellt
    antwort3.classList.add('antwortfeld3');
    antwort3.setAttribute('id', 'antwort3');
    document.querySelector(".Antworten").appendChild(antwort3);
    let weiter = document.createElement("button"); //Weiter button wird erzeugt
    weiter.classList.add('weiterbtn');
    weiter.setAttribute('id', 'weiterbtnpingu');
    weiter.innerHTML = "Weiter";
    document.querySelector(".Weiterbuttonbox").appendChild(weiter);
    //Was ich machen will:
    //1. auf den klick auf eine kategorie soll die klasse zugewiesen und entfernt werden.
    //   -document.querySelector("#htmlbtn").addEventListener('click',function(){})
    //2. html button wird geklickt also sollen die fragen aus HTML_Fragen geladen werden. 
    //   -dabei soll der index math.random sein damit die fragen zufällig ausgeschmissen werden.
    //3. "if" html button geklickt wird soll das passieren
    //   "if" css button... und so weiter
    //4. wenn die frage richtig beantwortet wird wird sie vom grundarray ins richtig-beantwortet arry verschoben und rp erhöht sich um eins
    //5. wird die frage falsch beantwortet, blieibt sie entweder im grundarray oder wird ins falsch beantwortet verschoben
    //6. ist die funktion durch das grund array durch und die fünf punkte sind nicht erreicht wird das array mit den 
    //   falsch beantworteten arrays angesprochen bis dieses leer ist, dann sollte 5 punkte erreicht sein und die runde beendet werden
    //7. bei klick auf weiter wird eine neue zahlen von math random erzeugt und die neuen element aufgrufen
    let index = Math.round(Math.random() * 4); //Index um Fragen zufällig auszugeben
    let indmix = Math.round(Math.random() * 14); // Index um Fragen für die Gemischt kategorie auszugeben
    function htmlfragen() {
        frage.innerHTML = HTML_Fragen[0].question[index];
        antwort1.innerHTML = HTML_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = HTML_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = HTML_Fragen[0].anwser_false2[index];
    }
    function cssfragen() {
        frage.innerHTML = CSS_Fragen[0].question[index];
        antwort1.innerHTML = CSS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = CSS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = CSS_Fragen[0].anwser_false2[index];
    }
    function tsfragen() {
        frage.innerHTML = TS_Fragen[0].question[index];
        antwort1.innerHTML = TS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = TS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = TS_Fragen[0].anwser_false2[index];
    }
    function setall() {
        frage.innerHTML = GM_Fragen[0].question[indmix];
        antwort1.innerHTML = GM_Fragen[0].antworten_richtig[indmix];
        antwort2.innerHTML = GM_Fragen[0].anwser_false1[indmix];
        antwort3.innerHTML = GM_Fragen[0].anwser_false2[indmix];
    }
    // Text vom endscreen wenn die runde beendet wurde
    let congrats = document.createElement("headline2");
    congrats.setAttribute('id', 'endhead');
    congrats.innerHTML = "Herzlichen Glückwunsch! <br> Runde Geschafft :)";
    //deklarierung des END Buttons
    let endbtn = document.querySelector('#endbtn');
    function endbcdone() {
        frabox.classList.add('hidden');
        antbox.classList.add('hidden');
        weiter.classList.add('hidden');
        endbtn.classList.remove('hidden');
        document.querySelector('#end').appendChild(congrats);
    }
    //html button wird geklickt, klassen werden hinzugefügt/entfernt und die fragen geladen
    document.querySelector('#htmlbtn').addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden'); //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
            htmlfragen(); // innerhtml zuweisen
        document.querySelector('#antwort1').addEventListener('click', function () {
            if (HTML_Fragen[0].antworten_richtig) {
                alert(HTML_Fragen[0].explanation[index]); //alert für richtig
                rp++;
                console.log(rp);
                counter.innerHTML = "P: " + rp;
                richtigbeantwortet.push(HTML_Fragen[0].question[index]);
                richtgeantwort1.push(HTML_Fragen[0].antworten_richtig[index]);
                falscheantwort1.push(HTML_Fragen[0].anwser_false1[index]);
                falscheantwort2.push(HTML_Fragen[0].anwser_false2[index]);
                //delete HTML_Fragen[0].question[index];
                //delete HTML_Fragen[0].antworten_richtig[index];
                //delete HTML_Fragen[0].anwser_false1[index];
                //delete HTML_Fragen[0].anwser_false2[index];
                //HTML_Fragen[0].question.length - index;
                console.log(HTML_Fragen[0].question.length);
                console.log(richtigbeantwortet);
                console.log(richtgeantwort1);
                console.log(falscheantwort1);
                console.log(falscheantwort2);
                //HTML_Fragen[0].question.splice(index)
                //HTML_Fragen[0].anwser_true.splice(index)
                //HTML_Fragen[0].anwser_false1.splice(index)
                //HTML_Fragen[0].anwser_false2.splice(index)
                antwort1.disabled = true; //buttons disalben 
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
            ;
        });
        document.querySelector('#antwort2').addEventListener('click', function () {
            if (HTML_Fragen[0].anwser_false1) {
                alert("hier könnte ihre erklärung stehen");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {
            if (HTML_Fragen[0].anwser_false2) {
                alert("wieder falsch");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        //wieso , why , just work damn it
        // und ich weiß nicht wieso
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                console.log("ich funktioniere");
                index = Math.round(Math.random() * 4);
                htmlfragen();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            weiter.disabled = false;
            if (rp == 5) {
                counter.innerHTML = rp + " von 5";
                endbcdone();
                alert("hi");
            }
        });
    });
    document.querySelector('#cssbtn').addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden'); //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
            cssfragen(); // innerhtml zuweisen
        document.querySelector('#antwort1').addEventListener('click', function () {
            if (CSS_Fragen[0].antworten_richtig) {
                alert(CSS_Fragen[0].explanation); //alert für richtig
                rp++;
                console.log(rp);
                counter.innerHTML = "P: " + rp;
                antwort1.disabled = true; //buttons disalben 
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
            ;
        });
        document.querySelector('#antwort2').addEventListener('click', function () {
            if (CSS_Fragen[0].anwser_false1) {
                alert("hier könnte ihre erklärung stehen");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {
            if (CSS_Fragen[0].anwser_false2) {
                alert("wieder falsch");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                console.log("ich funktioniere");
                index = Math.round(Math.random() * 4);
                cssfragen();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            weiter.disabled = false;
            if (rp == 5) {
                counter.innerHTML = rp + " von 5";
                endbcdone();
                alert("hi");
            }
        });
    });
    document.querySelector('#tsbtn').addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden'); //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
            tsfragen(); // innerhtml zuweisen
        document.querySelector('#antwort1').addEventListener('click', function () {
            if (TS_Fragen[0].antworten_richtig) {
                alert(TS_Fragen[0].explanation); //alert für richtig
                rp++;
                console.log(rp);
                counter.innerHTML = "P: " + rp;
                antwort1.disabled = true; //buttons disalben 
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
            ;
        });
        document.querySelector('#antwort2').addEventListener('click', function () {
            if (TS_Fragen[0].anwser_false1) {
                alert("hier könnte ihre erklärung stehen");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {
            if (TS_Fragen[0].anwser_false2) {
                alert("wieder falsch");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                console.log("ich funktioniere");
                index = Math.round(Math.random() * 4);
                tsfragen();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            ;
            weiter.disabled = false;
            if (rp == 5) {
                counter.innerHTML = rp + " von 5";
                endbcdone();
                alert("hi");
            }
        });
    });
    document.querySelector("#gmbtn").addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden');
        setall();
        document.querySelector('#antwort1').addEventListener('click', function () {
            if (GM_Fragen[0].antworten_richtig) {
                alert("wuhu");
                rp++;
                console.log(rp);
                counter.innerHTML = "P:" + rp;
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
            ;
        });
        document.querySelector('#antwort2').addEventListener('click', function () {
            if (GM_Fragen[0].anwser_false1) {
                alert("falsch weil");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {
            if (GM_Fragen[0].anwser_false2) {
                alert("wieder falsch");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                console.log("ich funktioniere");
                index = Math.round(Math.random() * 4);
                setall();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            weiter.disabled = false;
            if (rp == 5) {
                counter.innerHTML = rp + " von 5";
                endbcdone();
                alert("hi");
            }
        });
    });
})(Endaufgabe || (Endaufgabe = {}));
//# sourceMappingURL=main.js.map