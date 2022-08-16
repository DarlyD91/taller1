let direccion=['louis','zayn','liam','niall','harry']

direccion[2];
console.log(`La posicion tres es ${direccion[2]}`);

direccion.length;
console.log(`La longitud es ${direccion.length}`);

let ultimo=direccion.length-1;
console.log(`La ultima posicion es ${direccion[direccion.length-1]}`);
console.log(direccion);

direccion.pop();
console.log(direccion);

direccion.unshift("Olly");
direccion.shift();

direccion.splice(1,3);
console.log(direccion);


direccion.forEach(function(elemento,index,array){
    console.log(`Posicion ${index} elemento ${elemento}`);
});


let aprendices=[];
let seguir=true

while(seguir==true){
    aprendices.push(prompt("Ingrese nombre aprendiz"));

    seguir=confirm("Desea ingrsar otro valor?");
}
console.log(`Los aprendices son ${aprendices}`)

let filtro=aprendices.filter(aprendices=>aprendices=="Louis");
console.log(filtro);

let busqueda=aprendices.find(aprendices=>aprendices=="Zayn");
console.log(busqueda);

let orden=aprendices.sort();
console.log(orden);

let aprendiz=[
    {primernombre:"Jennifer", primerapellido:"Fajardo"},
    {primernombre:"Sandra", primerapellido:"Rueda"},
]
console.log(aprendiz);

let nombrecompleto=aprendiz.map(function(el,index,ar){
    return ` ${el.primernombre} ${el.primerapellido}`
})
console.log(nombrecompleto);
