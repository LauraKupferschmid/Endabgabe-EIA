namespace Endaufgabe {

    // Madeleine Hansen hat mich auf die Idee mit dem Interface gebracht
    //Interface für Fragen erstellen
    interface Frage { 
        question: string[];
        antworten_richtig: string[];
        anwser_true: boolean[];
        anwser_false1: string[];
        anwser_false2: string[];
        explanation: string[];
    }

    let richtigbeantwortet: Frage[] = [];
    let falschbeantwortet: Frage[] = []

    //Fragen für HTML
    let HTML_Fragen: Frage[] = [
        {
            question: ["wer ist besser htm", "FRage2html", "FRage3html", "Frage4 ht", "Frage5html"],
            antworten_richtig: ["antwort1", "antwort2", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheant2", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
    ]

    console.log(HTML_Fragen[0].antworten_richtig[1]);  //Kontrolle von HTML_Fragen

    //Fragen für CSS
    let CSS_Fragen: Frage[] = [
        {
            question: ["wer ist besser css", "FRage2 css", "FRage3 css", "Frage4 css", "Frage5 css"],
            antworten_richtig: ["antwort1", "antwort2 css", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheant2 css lol", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere falsche anwort css again lol", "falsche ant3", "4te falsche an", "falsche die 5te"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
    ]

    console.log(CSS_Fragen[0].anwser_false1[2]);  //Kontrolle von CSS_Fragen

    //Fragen für Typescript
    let TS_Fragen: Frage[] = [
        {
            question: ["wer ist besser", "FRagets2", "FRage3", "Frage4", "Frage5"],
            antworten_richtig: ["antwort1", "antwortts2", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheantts2", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere ts falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
            explanation: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"],
        },
    ]
 
    let counter = document.createElement("paragragh"); //Punkte counter wird erstellt
    counter.classList.add('hidden');
    let rp = 0;
    counter.innerHTML = "P: " + rp;
    document.querySelector(".Counter").appendChild(counter)

    let katbox = document.querySelector("#kategoriebox")  //Div boxendeklarieren um classlist.add und remove zu machen
    let frabox = document.querySelector("#frageseite")

    console.log(TS_Fragen[0].anwser_false2[3]);   //Kontrolle von TS_Fragen

    let frage: HTMLElement = document.createElement("headline1")  //Headline Element für Fragen erstellen mit TS
    frage.classList.add(".frage")
    document.querySelector(".Frage").appendChild(frage);

    let antwort1: HTMLButtonElement = document.createElement("button")  //Buttons für Antworten erstellen mit TS
    antwort1.classList.add('antwortfeld1');
    antwort1.setAttribute('id', 'antwort1')
    document.querySelector(".Antworten").appendChild(antwort1);

    let antwort2: HTMLButtonElement = document.createElement("button")   //Antworfeld 2 wird erstellet
    antwort2.classList.add('antwortfeld2');
    antwort2.setAttribute('id', 'antwort2')
    document.querySelector(".Antworten").appendChild(antwort2);

    let antwort3: HTMLButtonElement = document.createElement("button")   //Antwortfeld 3 wird erstellt
    antwort3.classList.add('antwortfeld3');
    antwort3.setAttribute('id', 'antwort3')
    document.querySelector(".Antworten").appendChild(antwort3)

    let weiter: HTMLButtonElement = document.createElement("button");  //Weiter button wird erzeugt
    weiter.classList.add('weiterbtn');
    weiter.setAttribute('id', 'weiterbtnpingu');
    weiter.innerHTML = "Weiter";
    document.querySelector(".Weiterbuttonbox").appendChild(weiter);

    //auf den klick auf eine kategorie soll die klasse zugewiesen und entfernt werden.
    //document.querySelector("#htmlbtn").addEventListener('click',function(){})
    //html button wird geklickt also sollen die fragen aus HTML_Fragen geladen werden. 
    //dabei soll der index math.random sein damit die fragen zufällig ausgeschmissen werden.
    //if html button geklickt wird soll das passieren
    // if css button... und so weiter

    let index = Math.round(Math.random() * 4); //Fragen zufällig ausgeben

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


    //html button wird geklickt, klassen werden hinzugefügt/entfernt und die fragen geladen
    document.querySelector('#htmlbtn').addEventListener('click', function () {
        katbox.classList.add('hidden');  //klasse entfernen und zuweisen
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
            htmlfragen()  // innerhtml zuweisen

        document.querySelector('#antwort1').addEventListener('click', function () {   //Antwort eins wird geklickt
            if (HTML_Fragen[0].antworten_richtig) {
                alert("wuhu");  //alert für richtig
                rp++;
                console.log(rp);
                counter.innerHTML ="P: " + rp;
                antwort1.disabled = true;  //buttons disalben 
                antwort2.disabled = true;
                antwort3.disabled = true;

            };
        });
       
        document.querySelector('#antwort2').addEventListener('click', function () {   //Antwort zwei wird geklickt
            if (HTML_Fragen[0].anwser_false1) {
                alert("hier könnte ihre erklärung stehen")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });
        
        document.querySelector('#antwort3').addEventListener('click', function () {   //Antwort drei wird geklickt
            if (HTML_Fragen[0].anwser_false2) {
                alert("wieder falsch")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }
        });

         //wieso , why , just work damn it
         //fickt der scheiß button einfach alles
         // und ich weiß nicht wieso
        document.getElementById('weiterbtnpingu').addEventListener('click', function () {
            if(rp < 5) {
                    console.log("ich funktioniere")
                    index = Math.round(Math.random() * 4);
                    htmlfragen();
                    antwort1.disabled = false;
                    antwort2.disabled = false;
                    antwort3.disabled = false;
                }
                weiter.disabled = false;
            if (rp == 5) { htmlfragen();
                alert("hi");
            }
    })


document.querySelector("#cssbtn").addEventListener('click', function () {  //CSS button wird geklickt
    katbox.classList.add('hidden');//classen zugewiesen und entfernt
    frabox.classList.remove('hidden');
    counter.classList.remove('hidden'),
        cssfragen()  //inner html manipuliert

    document.querySelector('#antwort1').addEventListener('click', function () {  //Antwortbutton eins wird geklickt
        if (HTML_Fragen[0].antworten_richtig) {
            alert("wuhu");
            rp++;
            console.log(rp);
            counter.innerHTML = "P:" + rp;
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        };
    });

    document.querySelector('#antwort2').addEventListener('click', function () {  //Antwortbutton zwei wird gedrückt
        if (HTML_Fragen[0].anwser_false1) {
            alert("falsch weil")
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        }
    });

    document.querySelector('#antwort3').addEventListener('click', function () {  //Antwortbutton drei wirde gedrückt
        if (HTML_Fragen[0].anwser_false2) {
            alert("wieder falsch")
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        }
    });


    document.getElementById('weiterbtnpingu').addEventListener('click', function () {
        if(rp < 5) {
                console.log("ich funktioniere")
                index = Math.round(Math.random() * 4);
                cssfragen();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            weiter.disabled = false;
        if (rp == 5) { htmlfragen();
            alert("hi");
        }
    
    })
})


document.querySelector("#tsbtn").addEventListener('click', function () {  //Typscriptbutton wurde geklickt
    katbox.classList.add('hidden');  //klassen zugewiesen und entfernt
    frabox.classList.remove('hidden');
    counter.classList.remove('hidden'),
        tsfragen()  //inner html manipuliert

    document.querySelector('#antwort1').addEventListener('click', function () {  //Antwortbutton eins wird geklickt
        if (HTML_Fragen[0].antworten_richtig) {
            alert("wuhu");
            rp++;
            console.log(rp);
            counter.innerHTML = "P:" + rp;
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        };
    });

    document.querySelector('#antwort2').addEventListener('click', function () {  //Antwortbutto zwei wird gedrückt
        if (HTML_Fragen[0].anwser_false1) {
            alert("falsch weil");
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        }
    });

    document.querySelector('#antwort3').addEventListener('click', function () { //Antwortbutto drei wird gedrückt
        if (HTML_Fragen[0].anwser_false2) {
            alert("wieder falsch")
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        }
    });

    document.getElementById('weiterbtnpingu').addEventListener('click', function () {
        if(rp < 5) {
                console.log("ich funktioniere")
                index = Math.round(Math.random() * 4);
                tsfragen();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            weiter.disabled = false;
        if (rp == 5) { htmlfragen();
            alert("hi");
        }
    
    })
})

document.querySelector("#gmbtn").addEventListener('click', function () {    //Gemischtkategoriebutton wird geklickt
    katbox.classList.add('hidden'),
        frabox.classList.remove('hidden'),
        counter.classList.remove('hidden'),
        function setall() {
            console.log("test hallo :)")
        };


    document.querySelector('#antwort1').addEventListener('click', function () {  // Antwortfeld 1 wird geklickt
        if (HTML_Fragen[0].antworten_richtig) {
            alert("wuhu");
            rp++;
            console.log(rp);
            counter.innerHTML = "P:" + rp;
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        };
    });
    document.querySelector('#antwort2').addEventListener('click', function () {  // Antwortfeld 2 wird geklickt
        if (HTML_Fragen[0].anwser_false1) {
            alert("falsch weil")
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        }
    });
    document.querySelector('#antwort3').addEventListener('click', function () {  // Antwortfeld 3 wird geklickt
        if (HTML_Fragen[0].anwser_false2) {
            alert("wieder falsch")
            antwort1.disabled = true;
            antwort2.disabled = true;
            antwort3.disabled = true;
        }
    });

    document.getElementById('weiterbtnpingu').addEventListener('click', function () {
        if(rp < 5) {
                console.log("ich funktioniere")
                index = Math.round(Math.random() * 4);
                htmlfragen();
                antwort1.disabled = false;
                antwort2.disabled = false;
                antwort3.disabled = false;
            }
            weiter.disabled = false;
        if (rp == 5) { htmlfragen();
            alert("hi");
        }
    
    })
})


    //wenn die frage richtig beantwortet wird wird sie vom grundarray ins richtig eantwortet arry verschoben
    //wird die frage falsch gestellt blieibt sie entweder im grund array oder wird ins falsch beantwortet verschoben
    //ist die funktion durch das grund array durch und die fünf punkte sind nicht errreicht wird das array mit den 
    //falsch beantworteten arrays angesprochen bis dieses leer ist, dann sollte 5 punkte erreicht ein und die runde 
    //beendet werden
    //bei klick auf weiter wird eine neue zahlen 
})

}


  /*const buttonsarr = [antwort1,antwort2,antwort3]
    
    const shuffle = (buttonsarr)=>{
        let m = buttonsarr.length;
        while(m){
            const i = Math.floor(Math.random()*m--);
            [buttonsarr[m],buttonsarr[i]]=[buttonsarr[i],buttonsarr[m]]
        }
        return buttonsarr
    }

    const randshuff = shuffle(buttonsarr)

    console.log(shuffle(buttonsarr))

    const Antwortboxen = document.getElementById("#Antwortenboxen");
    for (const buttonsarr of randshuff){
        const button = document.createElement("button");
        button.textContent= buttonsarr;
        Antwortboxen.appendChild(button);
    })*/