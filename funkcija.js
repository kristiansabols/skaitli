//Jānolasa ievadītais
//Jāizvēlas skaitlis datoram
//Jāpārbauda ievadītais
//Jāizvada atbilde

let datoraSkaitlis=10

function nolasitIevadito(){
    let ievaditais = document.getElementById("ievade").value;
    console.log(ievaditais);
}

function veiktParbaudi(){
    console.log("Pārbaudīts!!!", datoraSkaitlis);
}

function nomainitSkaitli(){
    datoraSkaitlis = Math.round(Math.random() * 100);
    console.log(datoraSkaitlis);
}