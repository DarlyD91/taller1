let dinero, marranito=0, cont=0;
let resp=true;

while(resp==true){
dinero=prompt("Ingrese la cantidas que desea guardar");
marranito=parseInt(marranito)+parseInt(dinero);
cont=parseInt(cont)+1;

resp=confirm("Desea continuar?");
}
alert(`El resultado es ${marranito}`);
alert(`El valor acumulado es ${cont}`);

