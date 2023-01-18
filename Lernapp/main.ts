namespace Endaufgabe {

/*FRagen HTML*/
    let frage1h = "Frage 1"
    let frage2h = "Frage 2"
    let frage3h = "Frage 3"
    let frage4h = "Frage 4"
    let frage5h = "Frage 5"

/*Antworten Frage 1-5 HTML*/
    let antwort1t = "Antwor 1 Richtig"
    let antwort1f1 = "Antwor 1 false"
    let antwort1f2 = "Antwor 1 false"
    
    let antwortenf2 = [antwort1t,antwort1f1,antwort1f2]

    let antwort2t = "Antwor 2 true"
    let antwort2f1 = "Antwor 2 false"
    let antwort2f2 = "Antwor 2 False"

    let antwortenf1 = [antwort2t,antwort2f1,antwort1f2]

    let antwort3t = "Antwor 3 true"
    let antwort3f1 = "Antwor 3 false"
    let antwort3f2 = "Antwor 3 ture"
    
    let antwortenf3 = [antwort3t,antwort3f1,antwort3f2]

    let antwort4t = "Antwor 4 true"
    let antwort4f1 = "Antwor 4 false"
    let antwort4f2 = "Antwor 4 false"

    let antwortenf4 = [antwort4t,antwort4f1,antwort4f2]
    
    let antwort5t = "Antwor 5 true"
    let antwort5f1 = "Antwor 5 false"
    let antwort5f2 = "Antwor 5 false"

    let antwortenf5 = [antwort5t,antwort5f1,antwort5f2]

    let frageh =[frage1h,frage2h,frage3h,frage4h,frage5h];

    /*Element für Fragen*/
    let frage: HTMLElement = document.createElement("headline1")
    frage.innerHTML= frage1h
    document.querySelector(".Frage").appendChild(frage);

    /*Buttons für Antworten*/
    let myButton1: HTMLElement = document.createElement("button")
    myButton1.innerHTML= antwort1t
    document.querySelector(".Antworten").appendChild(myButton1);

    let antwort2: HTMLElement = document.createElement("button")
    antwort2.innerHTML= antwort1f1
    document.querySelector(".Antworten").appendChild(antwort2);

    let antwort3: HTMLElement = document.createElement("button")
    antwort3.innerHTML= antwort1f2
    document.querySelector(".Antworten").appendChild(antwort3)

    











 



















    
}