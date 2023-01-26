namespace Endaufgabe {

    //Interface für Fragen erstellen
    interface Frage {    // Madeleine Hansen hat mich auf die Idee mit dem Interface gebracht
        question: string[];
        antworten_richtig: string[];
        anwser_true: boolean[];
        anwser_false1: string[];
        anwser_false2: string[];
        explanation: string[];}
 
    let Gesamt_Fragen: Frage[] = [  //Fragen für HTML
        {
            question: ["Wofür werden Tags verwendet?", "Wie wird das semantische Skelett einer HTML bezeichnet?", "Was ist der DOM?", "Welches Element ist Bestandteil des DOMS?", "Was sind Attribute eines Tags?"],
            antworten_richtig: ["Zur semantischen Strukturierung einer HTML.", "DOM.", "eine Daten-Schnittstelle für Browser und Seite", "Kind", "value"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Zum kommentieren des HTMLs.", "TS.", "ein Baum.", "Cousinen", "body"],
            anwser_false2: ["Zum Erstellen des Typscripts", "JS.", "ein Dateiformat.", "Tochter", "img"],
            explanation: ["erklärungspingu1", "erklärungspingu2", "erklärungspingu3", "erklärungspingu4", "erklärungspingu der fünfte"],
        },
        {
            question: ["Wofür steht CSS", "Wofür wird CSS verwendet", "Welcher Tag wird verwendet um das HTML mit dem CSS zu verbinden?", "Mit welcher Klammer werden Anweisungen an CSS übergeben?", "Woraus besteht ein CSS Deklaration?"],
            antworten_richtig: ["Cascading Style Sheets", "zur Manipulation der Darstellung von Elementen.", "link", "()", "Eigenschaft und Wert"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Color Styling Statistic", "zur Manipulation des DOMs.", "a", "[]", "Tag und href"],
            anwser_false2: ["Command Style Sheet", "zur Manipulation des Browsers.", "p", "{}", "style und value"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
        {
            question: ["Wie wird Javascript in HTML eingebunden?", "Welche Dateiendung muss das Dokument haben, das in das HTML eingebunden wird?", "Woraus besteht eine Deklaration?", "Welches dieser Antworten ist ein Typ von TS?", "Wie kann man die Skript-Ladereihenfolge verändern?"],
            antworten_richtig: ["script-tag", ".js", "Schlüsselwort, Bezeichnung, Typ", "boolean", "defer"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["link-tag", ".ts", "Tags, links und Attributs", "age", "content"],
            anwser_false2: ["a-tag", ".html", "Eigenschaft, Wert und Klammern", "parameter", ".log"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        }
    ]

    let startbox = document.querySelector("#start")
    let katbox = document.querySelector("#kategoriebox")  //Div boxendeklarieren um classlist.add und remove zu machen
    let frabox = document.querySelector("#frageseite")
    let antbox = document.querySelector('#Antwortboxen')
    let endbtn = document.querySelector('#endbtn')
    let endscr = document.querySelector('#done_finished')

    const sound0: HTMLAudioElement = new Audio ("./Sounds/A.mp3"); //sounddateien einbinden in ts um sie für addEventlistener zu verwenden
    const sound1: HTMLAudioElement = new Audio ("./Sounds/G.mp3");
    const sound2: HTMLAudioElement = new Audio ("./Sounds/C.mp3");
    const sound3: HTMLAudioElement = new Audio ("./Sounds/laugh-2.mp3");
    const sound4: HTMLAudioElement = new Audio ("./Sounds/laugh-1.mp3")

    let ni = 4;
    let index = Math.round(Math.random() * (ni)); //Index um Fragen zufällig auszugeben
    let gesi = Math.round(Math.random() * 2);

    let counter = document.createElement("paragragh"); //Punkte counter wird erstellt
    counter.classList.add('hidden');
    let rp = 0;
    counter.innerHTML = "P: " + rp;
    document.querySelector(".Counter").appendChild(counter)

    // Text vom endscreen wenn die runde beendet wurde
    let congrats: HTMLElement =  document.createElement("headline2");
    congrats.setAttribute('id','endhead')
    congrats.innerHTML= "Herzlichen Glückwunsch! <br> Runde Geschafft :)";
    //deklarierung des END Buttons

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

    function playsample(s) {
        s.play();}

    function htmlfragen() {         //funktion um den inner.html der frage und antwortbutton elemente zu manipulieren
        frage.innerHTML = Gesamt_Fragen[0].question[index];
        antwort1.innerHTML = Gesamt_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = Gesamt_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = Gesamt_Fragen[0].anwser_false2[index];}

    function cssfragen() {          //funktion um den inner.html der frage und antwortbutton elemente zu manipulieren
        frage.innerHTML = Gesamt_Fragen[1].question[index];
        antwort1.innerHTML = Gesamt_Fragen[1].antworten_richtig[index];
        antwort2.innerHTML = Gesamt_Fragen[1].anwser_false1[index];
        antwort3.innerHTML = Gesamt_Fragen[1].anwser_false2[index];}

    function tsfragen() {           //funktion um den inner.html der frage und antwortbutton elemente zu manipulieren
        frage.innerHTML = Gesamt_Fragen[2].question[index];
        antwort1.innerHTML = Gesamt_Fragen[2].antworten_richtig[index];
        antwort2.innerHTML = Gesamt_Fragen[2].anwser_false1[index];
        antwort3.innerHTML = Gesamt_Fragen[2].anwser_false2[index];}

    function setall() {
        gesi = Math.round(Math.random() * 2);
        frage.innerHTML = Gesamt_Fragen[gesi].question[index];
        antwort1.innerHTML = Gesamt_Fragen[gesi].antworten_richtig[index];
        antwort2.innerHTML = Gesamt_Fragen[gesi].anwser_false1[index];
        antwort3.innerHTML = Gesamt_Fragen[gesi].anwser_false2[index];}

    function endbcdone(){
        frabox.classList.add('hidden');
        antbox.classList.add('hidden');
        weiter.classList.add('hidden');
        endbtn.classList.remove('hidden');
        document.querySelector('#done_finished').appendChild(congrats)}

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

    document.querySelector('#startbtn').addEventListener('click',function(){
        katbox.classList.remove('hidden');  //klasse entfernen und zuweisen
        startbox.classList.add('hidden');
        playsample(sound4);
    });

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
            if (Gesamt_Fragen[0].antworten_richtig) {
                alert(Gesamt_Fragen[0].explanation[index]);  //alert für richtig
                rp++;
                counter.innerHTML = "P: " + rp;
                Gesamt_Fragen[0].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                Gesamt_Fragen[0].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                Gesamt_Fragen[0].antworten_richtig.splice(index,1);
                Gesamt_Fragen[0].anwser_false2.splice(index,1);
                ni--;
                inaktive();    //buttons disalben 
                };
        });
        document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (Gesamt_Fragen[0].anwser_false1) {
                playsample(sound1);
                alert(Gesamt_Fragen[0].explanation[index])
                inaktive(); 
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (Gesamt_Fragen[0].anwser_false2) {
                playsample(sound1);
                alert(Gesamt_Fragen[0].explanation[index])
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
            if (Gesamt_Fragen[1].antworten_richtig) {
                playsample(sound1);
                alert(Gesamt_Fragen[1].explanation[index]);  //alert für richtig
                rp++;
                counter.innerHTML = "P: " + rp;
                inaktive();    //buttons disalben 
                Gesamt_Fragen[1].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                Gesamt_Fragen[1].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                Gesamt_Fragen[1].antworten_richtig.splice(index,1);
                Gesamt_Fragen[1].anwser_false2.splice(index,1);
                ni--;
                };
        });
        document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (Gesamt_Fragen[1].anwser_false1) {
                playsample(sound1);
                alert(Gesamt_Fragen[1].explanation[index])
                inaktive();  
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (Gesamt_Fragen[1].anwser_false2) {
                playsample(sound1);
                alert(Gesamt_Fragen[1].explanation[index])
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
            if (Gesamt_Fragen[2].antworten_richtig) {
                playsample(sound1);
                alert(Gesamt_Fragen[2].explanation[index]);  //alert für richtig
                rp++;
                counter.innerHTML = "P: " + rp;
                inaktive();    //buttons disalben 
                Gesamt_Fragen[2].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                Gesamt_Fragen[2].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                Gesamt_Fragen[2].antworten_richtig.splice(index,1);
                Gesamt_Fragen[2].anwser_false2.splice(index,1);
                ni--;
            };
        });
            document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (Gesamt_Fragen[2].anwser_false1) {
                playsample(sound1);
                alert(Gesamt_Fragen[2].explanation[index])
                inaktive(); 
            }
        });
            document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (Gesamt_Fragen[2].anwser_false2) {
                playsample(sound1);
                alert(Gesamt_Fragen[2].explanation[index])
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
        gesi = Math.round(Math.random() * 2);
        setall();
        weiter.disabled= true;
        console.log(gesi)
        console.log(index)
        document.querySelector('#antwort1').addEventListener('click', function () {  // Antwortfeld 1 wird geklickt
            if (Gesamt_Fragen[gesi].antworten_richtig) {
                playsample(sound1);
                alert(Gesamt_Fragen[gesi].explanation[index]);
                rp++;
                counter.innerHTML = "P:" + rp;
                Gesamt_Fragen[gesi].question.splice(index,1);  // fragen sollen nur einmal gestellt werden, deswegen werden die richtig beantworteten
                Gesamt_Fragen[gesi].anwser_false1.splice(index,1); //fragen aus dem array entfernt, damit nur falsch beantwortete Fragen wiederholt werden
                Gesamt_Fragen[gesi].antworten_richtig.splice(index,1);
                Gesamt_Fragen[gesi].anwser_false2.splice(index,1);
                ni--;
                inaktive();  
            };
        });
        document.querySelector('#antwort2').addEventListener('click', function () {  // Antwortfeld 2 wird geklickt
            if (Gesamt_Fragen[gesi].anwser_false1) {
                playsample(sound1);
                alert(Gesamt_Fragen[gesi].explanation[index])
                inaktive();
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {  // Antwortfeld 3 wird geklickt
                if (Gesamt_Fragen[gesi].anwser_false2) {
                playsample(sound1);
                alert(Gesamt_Fragen[gesi].explanation[index])
                inaktive();
            }
        });
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if (rp < 5) {
                playsample(sound2);
                index = Math.round(Math.random() * ni);
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
        document.querySelector('#endbtn').addEventListener('click',function(){
            playsample(sound3);
            console.log("hallo")
            endscr.classList.add('hidden')
            startbox.classList.remove('hidden')
            location.reload();
        })

    }

