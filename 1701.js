let lielakaisSkaitlis = 100;
let mazakaisSkaitlis = 0;
let minejums = 0;

function jaunsMinejums (){
    let randomNo1lidz0 = Math.random();
    let starpiba = lielakaisSkaitlis - mazakaisSkaitlis
    let randomPareizaIntervala = randomNo1lidz0*starpiba
    minejums =  Math.round(Math.random()*(lielakaisSkaitlis-mazakaisSkaitlis)+mazakaisSkaitlis)
}

function uzrakstitMinejumu(){
    document.getElementById("minejums")
}
