namespace Endaufgabe {

    //Interface für Fragen erstellen
    interface Frage {    // Madeleine Hansen hat mich auf die Idee mit dem Interface gebracht
        question: string[];
        antworten_richtig: string[];
        anwser_true: boolean[];
        anwser_false1: string[];
        anwser_false2: string[];
        explanation: string[];}

    const sound0: HTMLAudioElement = new Audio ("./Sounds/A.mp3"); //sounddateien einbinden in ts um sie für addEventlistener zu verwenden
    const sound1: HTMLAudioElement = new Audio ("./Sounds/G.mp3");
    const sound2: HTMLAudioElement = new Audio ("./Sounds/C.mp3");
    const sound3: HTMLAudioElement = new Audio ("./Sounds/F.mp3")

    function playsample(s) {
        s.play();}

    //let falschbeantwortet: Frage[] = []
 
    let HTML_Fragen: Frage[] = [  //Fragen für HTML
        {
            question: ["Wofür werden Tags verwendet?", "Wie wird das semantische Skelett einer HTML bezeichnet?", "Was ist der DOM?", "Welches Element ist Bestandteil des DOMS?", "Was sind Attribute eines Tags?"],
            antworten_richtig: ["Zur semantischen Strukturierung einer HTML.", "DOM.", "eine Daten-Schnittstelle für Browser und Seite", "Kind", "value"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Zum kommentieren des HTMLs.", "TS.", "ein Baum.", "Cousinen", "body"],
            anwser_false2: ["Zum Erstellen des Typscripts", "JS.", "ein Dateiformat.", "Tochter", "img"],
            explanation: ["erklärungspingu1", "erklärungspingu2", "erklärungspingu3", "erklärungspingu4", "erklärungspingu der fünfte"],
        }]

    let CSS_Fragen: Frage[] = [ //Fragen für CSS
        {
            question: ["Wofür steht CSS", "Wofür wird CSS verwendet", "Welcher Tag wird verwendet um das HTML mit dem CSS zu verbinden?", "Mit welcher Klammer werden Anweisungen an CSS übergeben?", "Woraus besteht ein CSS Deklaration?"],
            antworten_richtig: ["Cascading Style Sheets", "zur Manipulation der Darstellung von Elementen.", "link", "()", "Eigenschaft und Wert"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Color Styling Statistic", "zur Manipulation des DOMs.", "a", "[]", "Tag und href"],
            anwser_false2: ["Command Style Sheet", "zur Manipulation des Browsers.", "p", "{}", "style und value"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        }]

    let TS_Fragen: Frage[] = [  //Fragen für Typescript
        {
            question: ["Wie wird Javascript in HTML eingebunden?", "Welche Dateiendung muss das Dokument haben, das in das HTML eingebunden wird?", "Woraus besteht eine Deklaration?", "Welches dieser Antworten ist ein Typ von TS?", "Wie kann man die Skript-Ladereihenfolge verändern?"],
            antworten_richtig: ["script-tag", ".js", "Schlüsselwort, Bezeichnung, Typ", "boolean", "defer"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["link-tag", ".ts", "Tags, links und Attributs", "age", "content"],
            anwser_false2: ["a-tag", ".html", "Eigenschaft, Wert und Klammern", "parameter", ".log"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        }]

    let GM_Fragen: Frage[] = [
        {
            question: ["Wofür werden Tags verwendet?", "Wie wird das semantische Skelett einer HTML bezeichnet?", "Was ist der DOM?", "Welches Element ist Bestandteil des DOMS?", "Was sind Attribute eines Tags?","Wofür steht CSS?", "Wofür wird CSS verwendet?", "Welcher Tag wird verwendet um das HTML mit dem CSS zu verbinden?", "Mit welcher Klammer werden Anweisungen an CSS übergeben?", "Woraus besteht ein CSS Deklaration?","Wie wird Javascript in HTML eingebunden?", "Welche Dateiendung muss das Dokument haben, das in das HTML eingebunden wird?", "Woraus besteht eine Deklaration?", "Welches dieser Antworten ist ein Typ von TS?", "Wie kann man die Skript-Ladereihenfolge verändern?"],
            antworten_richtig: ["Zur semantischen Strukturierung einer HTML.", "DOM.", "eine Daten-Schnittstelle für Browser und Seite", "Kind", "value","Cascading Style Sheets", "zur Manipulation der Darstellung von Elementen.", "link", "()", "Eigenschaft und Wert","script-tag", ".js", "Schlüsselwort, Bezeichnung, Typ", "boolean", "defer"],
            anwser_true: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            anwser_false1: ["Zum kommentieren des HTMLs.", "TS.", "ein Baum.", "Cousinen", "body","Color Styling Statistic", "zur Manipulation des DOMs.", "a", "[]", "Tag und href","link-tag", ".ts", "Tags, links und Attributs", "age", "content"],
            anwser_false2: ["Zum Erstellen des Typscripts", "JS.", "ein Dateiformat.", "Tochter", "img","Command Style Sheet", "zur Manipulation des Browsers.", "p", "{}", "style und value","a-tag", ".html", "Eigenschaft, Wert und Klammern", "parameter", ".log"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te", "noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te", "noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        }]
    console.log(GM_Fragen[0].anwser_false2[9]);

    let counter = document.createElement("paragragh"); //Punkte counter wird erstellt
    counter.classList.add('hidden');
    let rp = 0;
    counter.innerHTML = "P: " + rp;
    document.querySelector(".Counter").appendChild(counter)

    let katbox = document.querySelector("#kategoriebox")  //Div boxendeklarieren um classlist.add und remove zu machen
    let frabox = document.querySelector("#frageseite")
    let antbox = document.querySelector('#Antwortboxen')

    let frage: HTMLElement = document.createElement("headline1")  //Headline Element für Fragen erstellen mit TS
    frage.classList.add(".frage")
    document.querySelector(".Frage").appendChild(frage);

    let antwort1: HTMLButtonElement= document.createElement("button");  //Buttons für Antworten erstellen mit TS
    antwort1.classList.add('antwortfeld1');
    antwort1.setAttribute('id', 'antwort1');
    document.querySelector(".Antworten").appendChild(antwort1);

    let antwort2: HTMLButtonElement = document.createElement("button"); //Antworfeld 2 wird erstellet
    antwort2.classList.add('antwortfeld2');
    antwort2.setAttribute('id', 'antwort2');
    document.querySelector(".Antworten").appendChild(antwort2);

    let antwort3: HTMLButtonElement = document.createElement("button");  //Antwortfeld 3 wird erstellt
    antwort3.classList.add('antwortfeld3');
    antwort3.setAttribute('id', 'antwort3');
    document.querySelector(".Antworten").appendChild(antwort3)

    let weiter: HTMLButtonElement = document.createElement("button");  //Weiter button wird erzeugt
    weiter.classList.add('weiterbtn');
    weiter.setAttribute('id', 'weiterbtnpingu');
    weiter.innerHTML = "Weiter";
    document.querySelector(".Weiterbuttonbox").appendChild(weiter);

    let ni = 4;
    let nigm =14;
    let index = Math.round(Math.random() * (ni)); //Index um Fragen zufällig auszugeben
    let indmix = Math.round(Math.random() * nigm);  // Index um Fragen für die Gemischt kategorie auszugeben

    function htmlfragen() {         //funktion um den inner.html der frage und antwortbutton elemente zu manipulieren
        frage.innerHTML = HTML_Fragen[0].question[index];
        antwort1.innerHTML = HTML_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = HTML_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = HTML_Fragen[0].anwser_false2[index];}
    function cssfragen() {          //funktion um den inner.html der frage und antwortbutton elemente zu manipulieren
        frage.innerHTML = CSS_Fragen[0].question[index];
        antwort1.innerHTML = CSS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = CSS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = CSS_Fragen[0].anwser_false2[index];}
    function tsfragen() {           //funktion um den inner.html der frage und antwortbutton elemente zu manipulieren
        frage.innerHTML = TS_Fragen[0].question[index];
        antwort1.innerHTML = TS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = TS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = TS_Fragen[0].anwser_false2[index];}

    function setall() {
        frage.innerHTML = GM_Fragen[0].question[indmix];
        antwort1.innerHTML = GM_Fragen[0].antworten_richtig[indmix];
        antwort2.innerHTML = GM_Fragen[0].anwser_false1[indmix];
        antwort3.innerHTML = GM_Fragen[0].anwser_false2[indmix];}

    // Text vom endscreen wenn die runde beendet wurde
    let congrats: HTMLElement =  document.createElement("headline2");
    congrats.setAttribute('id','endhead')
    congrats.innerHTML= "Herzlichen Glückwunsch! <br> Runde Geschafft :)";

    //deklarierung des END Buttons
    let endbtn = document.querySelector('#endbtn')

    function endbcdone(){
        frabox.classList.add('hidden');
        antbox.classList.add('hidden');
        weiter.classList.add('hidden');
        endbtn.classList.remove('hidden');
        document.querySelector('#end').appendChild(congrats)}
    function inaktive(){
        antwort1.disabled = true;
        antwort2.disabled = true;
        antwort3.disabled = true;
        weiter.disabled =false;}
    function aktive(){
        antwort1.disabled = false;
        antwort2.disabled = false;
        antwort3.disabled = false;
        weiter.disabled= true;}

    //html button wird geklickt, klassen werden hinzugefügt/entfernt und die fragen geladen
    document.querySelector('#htmlbtn').addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden');  //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
        weiter.disabled= true;
            htmlfragen()  // innerhtml zuweisen

        document.querySelector('#antwort1').addEventListener('click', function () {   //Antwort eins wird geklickt
            playsample(sound1);
            if (HTML_Fragen[0].antworten_richtig) {
                alert(HTML_Fragen[0].explanation[index]);  //alert für richtig
                rp++;
                counter.innerHTML = "P: " + rp;
                HTML_Fragen[0].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                HTML_Fragen[0].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                HTML_Fragen[0].antworten_richtig.splice(index,1);
                HTML_Fragen[0].anwser_false2.splice(index,1);
                ni--;
                inaktive();    //buttons disalben 
                };
        });
        document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (HTML_Fragen[0].anwser_false1) {
                playsample(sound1);
                alert(HTML_Fragen[0].explanation[index])
                inaktive(); 
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (HTML_Fragen[0].anwser_false2) {
                playsample(sound1);
                alert(HTML_Fragen[0].explanation[index])
                inaktive(); 
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                playsample(sound2);
                index = Math.round(Math.random() * ni);
                htmlfragen();
                aktive();  
            }
            weiter.disabled= true;
            if (rp == 5) {
                counter.innerHTML =  rp + " von 5"
                endbcdone();
                alert("hi");
            }
        })
    })

    document.querySelector('#cssbtn').addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden');  //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
        weiter.disabled= true;
            cssfragen(); // innerhtml zuweisen
        document.querySelector('#antwort1').addEventListener('click', function () {   //Antwort eins wird geklickt
            if (CSS_Fragen[0].antworten_richtig) {
                playsample(sound1);
                alert(CSS_Fragen[0].explanation[index]);  //alert für richtig
                rp++;
                counter.innerHTML = "P: " + rp;
                inaktive();    //buttons disalben 
                CSS_Fragen[0].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                CSS_Fragen[0].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                CSS_Fragen[0].antworten_richtig.splice(index,1);
                CSS_Fragen[0].anwser_false2.splice(index,1);
                ni--;
                };
        });
        document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (CSS_Fragen[0].anwser_false1) {
                playsample(sound1);
                alert(CSS_Fragen[0].explanation[index])
                inaktive();  
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (CSS_Fragen[0].anwser_false2) {
                playsample(sound1);
                alert(CSS_Fragen[0].explanation[index])
                inaktive();  
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                playsample(sound2);
                index = Math.round(Math.random() * ni);
                cssfragen();
                aktive();  
            }
            weiter.disabled= true;
            if (rp == 5) {
                counter.innerHTML =  rp + " von 5"
                endbcdone();
                alert("hi");
            }
        });
    })

    document.querySelector('#tsbtn').addEventListener('click', function () {
        playsample(sound0);
        katbox.classList.add('hidden');  //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
        weiter.disabled= true;
        tsfragen(); // innerhtml zuweisen
             document.querySelector('#antwort1').addEventListener('click', function () {   //Antwort eins wird geklickt
            if (TS_Fragen[0].antworten_richtig) {
                playsample(sound1);
                alert(TS_Fragen[0].explanation[index]);  //alert für richtig
                rp++;
                counter.innerHTML = "P: " + rp;
                inaktive();    //buttons disalben 
                TS_Fragen[0].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                TS_Fragen[0].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                TS_Fragen[0].antworten_richtig.splice(index,1);
                TS_Fragen[0].anwser_false2.splice(index,1);
                ni--;
            };
        });
            document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (TS_Fragen[0].anwser_false1) {
                playsample(sound1);
                alert(TS_Fragen[0].explanation[index])
                inaktive(); 
            }
        });
            document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (TS_Fragen[0].anwser_false2) {
                playsample(sound1);
                alert(TS_Fragen[0].explanation[index])
                inaktive();
            }
        });
            document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                playsample(sound2);
                index = Math.round(Math.random() * ni);
                tsfragen();
                aktive();  
            };
            weiter.disabled= true;
            if (rp == 5) {
                counter.innerHTML =  rp + " von 5"
                endbcdone();
                alert("hi");
            }
        })
    });

    document.querySelector("#gmbtn").addEventListener('click', function () {    //Gemischtkategoriebutton wird geklickt
        playsample(sound0);
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden');
        setall();
        weiter.disabled= true;
        document.querySelector('#antwort1').addEventListener('click', function () {  // Antwortfeld 1 wird geklickt
            if (GM_Fragen[0].antworten_richtig) {
                playsample(sound1);
                alert(GM_Fragen[0].explanation[indmix]);
                rp++;
                counter.innerHTML = "P:" + rp;
                GM_Fragen[0].question.splice(indmix,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                GM_Fragen[0].anwser_false1.splice(indmix,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                GM_Fragen[0].antworten_richtig.splice(indmix,1);
                GM_Fragen[0].anwser_false2.splice(indmix,1);
                nigm--;
                inaktive();  
            };
        });
        document.querySelector('#antwort2').addEventListener('click', function () {  // Antwortfeld 2 wird geklickt
            if (GM_Fragen[0].anwser_false1) {
                playsample(sound1);
                alert(GM_Fragen[0].explanation[indmix])
                inaktive();
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {  // Antwortfeld 3 wird geklickt
                if (GM_Fragen[0].anwser_false2) {
                playsample(sound1);
                alert(GM_Fragen[0].explanation[indmix])
                inaktive();
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                playsample(sound2);
                indmix = Math.round(Math.random() * nigm);
                setall()
                aktive();
            }
            weiter.disabled= true;
            if (rp == 5) {
                counter.innerHTML =  rp + " von 5"
                endbcdone();
                alert("hi");
            }
        })
        })

    }

