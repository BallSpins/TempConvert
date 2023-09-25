const Cel = document.getElementById("Cel");
const Fah = document.getElementById("Fah");
const Kel = document.getElementById("Kel");
const Rea = document.getElementById("Rea");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p1a = "0°C";
const p2a = "0°F";
const p3a = "0K";
const p4a = "0°r";
const calc = document.getElementById("Calc");
const putOn = document.getElementById("input");

p1.innerHTML = p1a;
p2.innerHTML = p2a;
p3.innerHTML = p3a;
p4.innerHTML = p4a;

function funcCel() {
    const input = parseFloat(document.getElementById("input").value);
    const Fahc = (1.8*input+32).toFixed(2);
    const Kelc = (input+273.15).toFixed(2);
    const Reac = (input*4/5).toFixed(2);
    let Cx = input + "°C";
    let Fx = Fahc + "°F";
    let Kx = Kelc + "K";
    let Rx = Reac + "°r";

    p1.innerHTML = Cx;
    p2.innerHTML = Fx;
    p3.innerHTML = Kx;
    p4.innerHTML = Rx;
}
function funcFah() {
    const input = parseFloat(document.getElementById("input").value);
    const Celc = (5/9*(input-32)).toFixed(2);
    const Kelc = ((input+459.67)*5/9).toFixed(2);
    const Reac = ((input-32)*4/9).toFixed(2);
    let Cx = Celc + "°C";
    let Fx = input + "°F";
    let Kx = Kelc + "K";
    let Rx = Reac + "°r";
    
    p1.innerHTML = Cx;
    p2.innerHTML = Fx;
    p3.innerHTML = Kx;
    p4.innerHTML = Rx;
    
}
function funcKel() {
    const input = parseFloat(document.getElementById("input").value);
    const Celc = (input-273.15).toFixed(2);
    const Fahc = (1.8*(input-273.15)+32).toFixed(2);
    const Reac = ((input - 273.15)/1.25).toFixed(2);
    let Cx = Celc + "°C";
    let Fx = Fahc + "°F";
    let Kx = input + "K";
    let Rx = Reac + "°r";
    
    p1.innerHTML = Cx;
    p2.innerHTML = Fx;
    p3.innerHTML = Kx;
    p4.innerHTML = Rx;
    
}
function funcRea() {
    const input = parseFloat(document.getElementById("input").value);
    const Celc = (input*1.25).toFixed(2);
    const Fahc = ((input*2.25)+32).toFixed(2);
    const Kelc = ((input * 1.25)+273.15).toFixed(2);
    let Cx = Celc + "°C";
    let Fx = Fahc + "°F";
    let Kx = Kelc + "K";
    let Rx = input + "°r";
    
    p1.innerHTML = Cx;
    p2.innerHTML = Fx;
    p3.innerHTML = Kx;
    p4.innerHTML = Rx;
    
}
// turip
function toCel() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcCel();" );
    //Cel
    Cel.style.backgroundColor = 'blue';
    Cel.style.color = 'white';
    //Fah
    Fah.style.backgroundColor = 'white';
    Fah.style.color = 'black';
    //Kel
    Kel.style.backgroundColor = 'white';
    Kel.style.color = 'black';
    //Rea
    Rea.style.backgroundColor = 'white';
    Rea.style.color = 'black';
}
function toFah() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcFah();" );
    //Cel
    Cel.style.backgroundColor = 'white';
    Cel.style.color = 'black';
    //Fah
    Fah.style.backgroundColor = 'blue';
    Fah.style.color = 'white';
    //Kel
    Kel.style.backgroundColor = 'white';
    Kel.style.color = 'black';
    //Rea
    Rea.style.backgroundColor = 'white';
    Rea.style.color = 'black';
}
function toKel() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcKel();" );
    //Cel
    Cel.style.backgroundColor = 'white';
    Cel.style.color = 'black';
    //Fah
    Fah.style.backgroundColor = 'white';
    Fah.style.color = 'black';
    //Kel
    Kel.style.backgroundColor = 'blue';
    Kel.style.color = 'white';
    //Rea
    Rea.style.backgroundColor = 'white';
    Rea.style.color = 'black';
}
function toRea() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcRea();" );
    //Cel
    Cel.style.backgroundColor = 'white';
    Cel.style.color = 'black';
    //Fah
    Fah.style.backgroundColor = 'white';
    Fah.style.color = 'black';
    //Kel
    Kel.style.backgroundColor = 'white';
    Kel.style.color = 'black';
    //Rea
    Rea.style.backgroundColor = 'blue';
    Rea.style.color = 'white';
}
putOn.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
        calc.click();
    }
});