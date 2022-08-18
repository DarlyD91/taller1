/*//Declarar la función por declaración 
function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`El lanzamiento fue ${moneda}`);
}

//Invocar la función
lanzarmoneda();

//

//Declarar la función de retorno
function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

//Invocar la función con valor de retorno
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);*/


//funcion con parametros
let lanzarmoneda=function lanzarmoneda(){
    let moneda =Math.floor((Math.random()*2)+1);
    return moneda;
}
let lanzamiento=lanzarmoneda()



//función con parámentros

/*function ganar(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}*/



//función anonima

let ganar =function(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

//función flecha o arrow


let perder=(saldo, apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}


//Invocar la función con valor de retorno
ganar(4000,1000);
perder(20000,1000);

let seguir=true;
let saldo=0;
let jugador=prompt("Ingresa el nombre del jugador");
saldo=parseInt(prompt("¿Cuanto deseas recargar para jugar?"));
while(seguir==true){
    let eleccion=prompt(`${jugador} seleccione 1 si desea Cara o 2 si desea Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deseas apostar?`));
    let lanzamiento=lanzarmoneda();
    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue cara, escogiste cara, Tú ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue sello, escogiste sello, Tú ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue cara, escogiste Sello, Perdiste!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue sello, escogiste cara, Perdiste!!, tu nuevo saldo es ${saldo}`);
    }
}


