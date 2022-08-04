console.log("Hola mundo");

//let numero=25;

/*console.log("El numero es ",numero);
console.log(`El numero es ${numero}`);

let nombre="Jennifer";
console.log(`El nombre es ${nombre}`);

let verdad=true;
console.log(`La variable es ${verdad}`);

let sena;
console.log(`La variable es ${sena}`);*/

/*let res=numero+5;
console.log("El resultado es "+res);
console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+5}`);
*/
//window.alert("Esto es una alerta");
/*
let estado=window.confirm("Estás seguro que bla bla bla")
console.log(`La ventana arrojó ${estado}`);

/*let num1=prompt("Digite el primer número");
let res=numero+parseInt(num1);
console.log(`El resultado es ${res}`);*/

/*let num1=prompt("Digite el primer numero");
let num2=prompt("Digite el segundo numero");
let ers=parseInt(num1)+parseInt(num2);
console.log(`El resultado es ${ers}`); */

/*Condicionales
if(ers=num1>num2){
    console.log(`El numero mayor es ${num1}`); 
}
else if(ers=num1==num2){
    console.log(`El numero ${num1} es igual al numero ${num2}`); 
}
else{
    console.log(`El numero mayor es ${num2}`); 
}*/

/*Operador ternario

let nummayor=(num1>num2)
?"El numero mayor es el primero"
:"El numero mayor es el segundo"

console.log(nummayor);*/

/*Condicionales con condicion compuesta

let usuario=prompt("Digite su nombre de usuario");
let password=prompt("Digite su contraseña");

if(usuario=="jfajardo" && password=="qwerty"){
    alert("Bienvenido");
}

else if(usuario=="jfajardo" && password!="qwerty"){
    alert("Verifique su password");
}

else if(usuario!="jfajardo" && password=="qwerty"){
    alert("Verifique su usuario");
}

else if(usuario!="jfajardo" && password!="qwerty"){
    alert("Credenciales de acceso incorrectos");
}*/

/*else{
    alert("Credenciales de acceso incorrectos");
}*/

//Condicional múltiple

let no1=prompt("Digite el primer numero");
let no2=prompt("Digite el segundo numero");
let opcion=prompt("Seleccione una operacion");
let resultado

switch(opcion){

    case "suma":
        resultado=no1+no2
        alert(`El resultado de la suma es ${resultado}`);
    break;
    case "resta":
        resultado=no1-no2
        alert(`El resultado de la resta es ${resultado}`);
    break;
    case "multiplicacion":
        resultado=no1*no2
        alert(`El resultado de la multiplicacion es ${resultado}`);
    break;
    case "division":
        resultado=no1/no2
        alert(`El resultado de la division es ${resultado.toFixed(2)}`);
    break;
    case "potencia":
        resultado=Math.pow(no1,no2)
        alert(`El resultado de la potencia es ${resultado.toFixed(2)}`);
    break;
    case "raiz":
        resultado=Math.sqrt(no1)
        alert(`El resultado de la raiz es ${resultado.toFixed(2)}`);
    break;
    default:
        alert("La opción no es valida");
    break;

}

