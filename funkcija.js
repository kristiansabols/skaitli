//Jānolasa ievadītais
//Jāizvēlas skaitlis datoram
//Jāpārbauda ievadītais
//Jāizvada atbilde

let datoraSkaitlis=10;


function nolasitIevadito(){
    let ievaditais = document.getElementById("ievade").value;
    console.log(ievaditais);
    return ievaditais;
}

function salidzinatSkaitlus(cilvekaSkaitlis){
    if (isNaN(cilvekaSkaitlis)){
        return "Lūdzu ievadi skaitli nevis to!!!!!!!!!!!! >:("
    }
    if (cilvekaSkaitlis>datoraSkaitlis){
        return "Skaitlis ir lielāks!"
    };
    if (cilvekaSkaitlis<datoraSkaitlis){
        return "Skaitlis ir mazāks!"
    };
return "PAREIZI!!!!!!!!!!!!!!!!!!!!!!!!!!"
}

function izvadiAtbildi(atbilde){
    document.getElementById("atbilde").innerHTML=atbilde;
}

function veiktParbaudi(){
    console.log("Pārbaudīts!!!", datoraSkaitlis);
    let minejums = nolasitIevadito();
    let rezultats = salidzinatSkaitlus(minejums);
    izvadiAtbildi(rezultats);
}

function nomainitSkaitli(){
    datoraSkaitlis = Math.round(Math.random() * 100);
    console.log(datoraSkaitlis);
}