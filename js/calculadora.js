function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    let res;

    console.log(`El num 1 es ${num1} y el numero 2 ${num2} la suma es ${op}`);

    switch(op){
        case "1":
            res=num1+num2;
            alert(`El resultado de la suma es ${res}`);
        break;
        case "2":
            res=num1-num2;
            alert(`El resultado de la resta es ${res}`);
        break;
        case "3":
            res=num1*num2;
            alert(`El resultado de la multiplicacion es ${res}`);
        break;
        case "4":
            res=num1/num2;
            alert(`El resultado de la division es ${res.toFixed(2)}`);
        break;
        default:
            alert("La opción no es valida");
        break;
    }
}