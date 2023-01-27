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
            explanation: ["Die Tags werden in HTML zur semantischen Strukturierung genutzt https://www.mediaevent.de/html/", "Das Skelett eines HTMLs nennt man DOM. https://www.w3schools.com/whatis/whatis_htmldom.asp", "Der DOM ist eine Datenschnittstelle für den Browser und der HTML-Seite. https://de.ryte.com/wiki/Document_Object_Model", "Das Childelement (Kindelement) ist ein Element des DOMs https://wiki.selfhtml.org/wiki/JavaScript/DOM", "Attribute sind Gestaltungsmerkmale und zusätzliche Informationen von HTML-Tags. https://www.mediaevent.de/html/HTML-Attribute.html"],
        },
        {
            question: ["Wofür steht CSS", "Wofür wird CSS verwendet", "Welcher Tag wird verwendet um das HTML mit dem CSS zu verbinden?", "Mit welcher Klammer werden Anweisungen an CSS übergeben?", "Woraus besteht ein CSS Deklaration?"],
            antworten_richtig: ["Cascading Style Sheets", "zur Manipulation der Darstellung von Elementen.", "link", "{}", "Eigenschaft und Wert"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["Color Styling Statistic", "zur Manipulation des DOMs.", "a", "[]", "Tag und href"],
            anwser_false2: ["Command Style Sheet", "zur Manipulation des Browsers.", "p", "()", "style und value"],
            explanation: ["CSS steht für Cascading Style Sheets. https://www.checkdomain.de/hosting/lexikon/css/", "CSS wir zur Manipulation der Darstellung von Elementen verwendet. https://sketch.media/projekte/blog/ratgeber/343-was-ist-css-und-wofuer-wird-es-benutzt.html", "Um das CSS-Stylesheet ins HTML einzubinden wird der link tag verwendet. https://www.mediaevent.de/css/css-einbinden.html", "Anweisungen wird im CSS mit {} geschweiften Klammern übergeben. https://www.html-seminar.de/cascading_style_sheets_aufbau.htm", "Eine CSS Deklaration besteht aus einer Eigenschaft und einem dazugehörigen Wert. https://www.w3schools.com/css/css_syntax.asp"],
        },
        {
            question: ["Wie wird Javascript in HTML eingebunden?", "Welche Dateiendung muss das Dokument haben, das in das HTML eingebunden wird?", "Woraus besteht eine Deklaration?", "Welches dieser Antworten ist ein Typ von TS?", "Wie kann man die Skript-Ladereihenfolge verändern?"],
            antworten_richtig: ["script-tag", ".js", "Schlüsselwort, Bezeichnung, Typ", "boolean", "defer"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["link-tag", ".ts", "Tags, links und Attributs", "age", "content"],
            anwser_false2: ["a-tag", ".html", "Eigenschaft, Wert und Klammern", "parameter", ".log"],
            explanation: ["Das Javascript wird über den script-Tag an das HTML übergeben. https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/DOM/Einbindung_in_HTML", "Die Endung muss .js sein da das Javascript in das HTML eingebunden wird und nicht das Typescript. https://www.c-sharpcorner.com/blogs/typescript-you-first-program-in-ts", "Eine Typescript Deklaration besteht grundsätzlich aus Schlüsselwort, Bezeichnung und einem Typ. https://www.w3schools.com/typescript/typescript_simple_types.php", "Boolean ist ein Deklarations typ der true oder false ausgibt. https://www.w3schools.com/typescript/typescript_simple_types.php", "Die Ladereihen kann von dem Attribut defer beeinflusst werden, sie muss im HTML dem script tag überreicht werden. https://www.w3schools.com/tags/att_script_defer.asp"],
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
                alert("Richtig! " + Gesamt_Fragen[0].explanation[index]);  //alert für richtig
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
                alert("Flasch! " + Gesamt_Fragen[0].explanation[index])
                inaktive(); 
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (Gesamt_Fragen[0].anwser_false2) {
                playsample(sound1);
                alert("Falsch! " + Gesamt_Fragen[0].explanation[index])
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
                alert("Richtig! " + Gesamt_Fragen[1].explanation[index]);  //alert für richtig
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
                alert("Falsch! " +Gesamt_Fragen[1].explanation[index])
                inaktive();  
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (Gesamt_Fragen[1].anwser_false2) {
                playsample(sound1);
                alert("Falsch! " + Gesamt_Fragen[1].explanation[index])
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
                alert("Richtig! " + Gesamt_Fragen[2].explanation[index]);  //alert für richtig
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
                alert("Falsch! " + Gesamt_Fragen[2].explanation[index])
                inaktive(); 
            }
        });
            document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (Gesamt_Fragen[2].anwser_false2) {
                playsample(sound1);
                alert("Falsch! " + Gesamt_Fragen[2].explanation[index])
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
        document.querySelector('#antwort1').addEventListener('click', function () {  // Antwortfeld 1 wird geklickt
            if (Gesamt_Fragen[gesi].antworten_richtig) {
                playsample(sound1);
                alert("Richtig! " + Gesamt_Fragen[gesi].explanation[index]);
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
                alert("Faslch! " + Gesamt_Fragen[gesi].explanation[index])
                inaktive();
            }
        });
        document.querySelector('#antwort3').addEventListener('click', function () {  // Antwortfeld 3 wird geklickt
                if (Gesamt_Fragen[gesi].anwser_false2) {
                playsample(sound1);
                alert("Falsch! " + Gesamt_Fragen[gesi].explanation[index])
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
            }
        })
        })
        document.querySelector('#endbtn').addEventListener('click',function(){
            playsample(sound3);
            endscr.classList.add('hidden')
            startbox.classList.remove('hidden')
            location.reload();
        })

    }

