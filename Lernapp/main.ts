namespace Endaufgabe {

    // Madeleine Hansen hat mich auf die Idee mit dem Interface gebracht
    //Interface für Fragen erstellen

    interface Frage {
        question: string[];
        antworten_richtig: string[];
        anwser_true: boolean[];
        anwser_false1: string[];
        anwser_false2: string[];
    }

    let richtigbeantwortet : Frage[]=[];
    let falschbeantwortet : Frage[]=[]

    //Fragen für HTML
    let HTML_Fragen: Frage[] = [
        {
            question: ["wer ist besser htm", "FRage2html", "FRage3html", "Frage4 ht", "Frage5html"],
            antworten_richtig: ["antwort1", "antwort2", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheant2", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"]
        },
    ]

    //Kontrolle von HTML_Fragen
    console.log(HTML_Fragen[0].antworten_richtig[1]);

    //Fragen für CSS
    let CSS_Fragen: Frage[] = [
        {
            question: ["wer ist besser css", "FRage2 css", "FRage3 css", "Frage4 css", "Frage5 css"],
            antworten_richtig: ["antwort1", "antwort2 css", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheant2 css lol", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere falsche anwort css again lol", "falsche ant3", "4te falsche an", "falsche die 5te"]
        },
    ]

    //Kontrolle von CSS_Fragen
    console.log(CSS_Fragen[0].anwser_false1[2]);

    //Fragen für Typescript
    let TS_Fragen: Frage[] = [
        {
            question: ["wer ist besser", "FRagets2", "FRage3", "Frage4", "Frage5"],
            antworten_richtig: ["antwort1", "antwortts2", "antwort3", "antwort4", "antwort5"],
            anwser_true: [true, true, true, true, true],
            anwser_false1: ["alphabet", "falscheantts2", "falscheant3", "falscheant4", "falscheant5"],
            anwser_false2: ["noch mehr falsche antworten", "eine weitere ts falsche anwort", "falsche ant3", "4te falsche an", "falsche die 5te"]
        },
    ]

    //Punkte counter wird erstellt 
    let counter = document.createElement("paragragh");
    counter.classList.add('hidden');
    let rp = 0;
    counter.innerHTML= "P: " + rp ;
    document.querySelector(".Counter").appendChild(counter)
    

    //Div boxendeklarieren um classlist.add und remove zu machen
    let katbox = document.querySelector("#kategoriebox")
    let frabox = document.querySelector("#frageseite")

    //Kontrolle von TS_Fragen
    console.log(TS_Fragen[0].anwser_false2[3]);

    //Headline Element für Fragen erstellen mit TS//

    let frage: HTMLElement = document.createElement("headline1")
    frage.classList.add(".frage")
    document.querySelector(".Frage").appendChild(frage);

    //Buttons für Antworten erstellen mit TS
    let antwort1: HTMLButtonElement = document.createElement("button")
    antwort1.classList.add('antwortfeld1');
    antwort1.setAttribute('id','antwort1')
    document.querySelector(".Antworten").appendChild(antwort1);

    //Antworfeld 2 wird erstellet
    let antwort2: HTMLButtonElement= document.createElement("button")
    antwort2.classList.add('antwortfeld2');
    antwort2.setAttribute('id','antwort2')
    document.querySelector(".Antworten").appendChild(antwort2);

    //Antwortfeld 3 wird erstellt
    let antwort3 : HTMLButtonElement = document.createElement("button")
    antwort3.classList.add('antwortfeld3');
    antwort3.setAttribute('id','antwort3')
    document.querySelector(".Antworten").appendChild(antwort3)

    //Weiter button wird erzeugt
    let weiter : HTMLButtonElement = document.createElement("button");
    weiter.classList.add('weiterbtn');
    weiter.setAttribute('id','weiter');
    weiter.innerHTML = "Weiter";
    document.querySelector(".Weiterbuttonbox").appendChild(weiter);
    
    //auf den klick auf eine kategorie soll die klasse zugewiesen und entfernt werden.
    //document.querySelector("#htmlbtn").addEventListener('click',function(){})
    //html button wird geklickt also sollen die fragen aus HTML_Fragen geladen werden. 
    //dabei soll der index math.random sein damit die fragen zufällig ausgeschmissen werden.
    //if html button geklickt wird soll das passieren
    // if css button... und so weiter

    //Fragen zufällig ausgeben
    let index = Math.round(Math.random()*4);

    function htmlfragen (){ 
        frage.innerHTML = HTML_Fragen[0].question[index];
        antwort1.innerHTML = HTML_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = HTML_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = HTML_Fragen[0].anwser_false2[index];
    }
    function cssfragen (){ 
        frage.innerHTML = CSS_Fragen[0].question[index];
        antwort1.innerHTML = CSS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = CSS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = CSS_Fragen[0].anwser_false2[index];
    }
    function tsfragen (){ 
        frage.innerHTML = TS_Fragen[0].question[index];
        antwort1.innerHTML = TS_Fragen[0].antworten_richtig[index];
        antwort2.innerHTML = TS_Fragen[0].anwser_false1[index];
        antwort3.innerHTML = TS_Fragen[0].anwser_false2[index];
    }


    //html button wird geklickt, klassen werden hinzugefügt/entfernt und die fragen geladen
    document.querySelector('#htmlbtn').addEventListener('click', function () {
        //klasse entfernen und zuweisen
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
        // innerhtml zuweisen
        htmlfragen()
    
        //Antwort eins wird geklickt
        document.querySelector('#antwort1').addEventListener('click',function(){
            if(HTML_Fragen[0].antworten_richtig){
                //alert für richtig
                alert ("wuhu");
                rp++;            
                console.log(rp);
                counter.innerHTML="P: "+ rp;
                //buttons disalben
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;

            };
        });
        //Antwort zwei wird geklickt
        document.querySelector('#antwort2').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false1){
                alert("hier könnte ihre erklärung stehen")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});
            //Antwort drei wird geklickt
        document.querySelector('#antwort3').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false2){
                alert("wieder falsch")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});

       document.querySelector('#weiter').addEventListener('click',function(){
        while(rp < 5){
                console.log("ich funktioniere")}
                weiter.disabled= false;
            if(rp = 5){
                alert("hi");
                }

            })
    })

    //CSS button wird geklickt
    document.querySelector("#cssbtn").addEventListener('click', function () {
        //classen zugewiesen und entfernt
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
        //inner html manipuliert
        cssfragen()

        //Antwortbutton eins wird geklickt
        document.querySelector('#antwort1').addEventListener('click',function(){
            if(HTML_Fragen[0].antworten_richtig){
                alert ("wuhu");
                rp++;
                console.log(rp);
                counter.innerHTML="P:"+ rp;
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            };
            });
        
        //Antwortbutton zwei wird gedrückt
        document.querySelector('#antwort2').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false1){
                alert("falsch weil")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});

        //Antwortbutton drei wirde gedrückt
        document.querySelector('#antwort3').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false2){
                alert("wieder falsch")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});
    })

    //Typscriptbutton wurde geklickt
    document.querySelector("#tsbtn").addEventListener('click', function () {
         //classen zugewiesen und entfernt
        katbox.classList.add('hidden');
        frabox.classList.remove('hidden');
        counter.classList.remove('hidden'),
        //inner html manipuliert
        tsfragen()
    
        //Antwortbutton eins wird geklickt
        document.querySelector('#antwort1').addEventListener('click',function(){
            if(HTML_Fragen[0].antworten_richtig){
                alert ("wuhu");
                rp++;
                console.log(rp);
                counter.innerHTML="P:"+ rp;
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            };
            });
        //Antwortbutto zwei wird gedrückt
        document.querySelector('#antwort2').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false1){
                alert("falsch weil");
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});
        //Antwortbutto drei wird gedrückt
        document.querySelector('#antwort3').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false2){
                alert("wieder falsch")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});
    })

    document.querySelector("#gmbtn").addEventListener('click', function () {
        katbox.classList.add('hidden'),
        frabox.classList.remove('hidden'),
        counter.classList.remove('hidden'),
        function setall() {
            console.log("test hallo :)")
        };
        

        document.querySelector('#antwort1').addEventListener('click',function(){
            if(HTML_Fragen[0].antworten_richtig){
                alert ("wuhu");
                rp++;
                console.log(rp);
                counter.innerHTML="P:"+ rp;
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }; 
            });
        document.querySelector('#antwort2').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false1){
                alert("falsch weil")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});
        document.querySelector('#antwort3').addEventListener('click',function(){
            if(HTML_Fragen[0].anwser_false2){
                alert("wieder falsch")
                antwort1.disabled = true;
                antwort2.disabled = true;
                antwort3.disabled = true;
            }});
    })


    //wenn die frage richtig beantwortet wird wird sie vom grundarray ins richtig eantwortet arry verschoben
    //wird die frage falsch gestellt blieibt sie entweder im grund array oder wird ins falsch beantwortet verschoben
    //ist die funktion durch das grund array durch und die fünf punkte sind nicht errreicht wird das array mit den 
    //falsch beantworteten arrays angesprochen bis dieses leer ist, dann sollte 5 punkte erreicht ein und die runde 
    //beendet werden
    //bei klick auf weiter wird eine neue zahlen 

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
    }*/
}