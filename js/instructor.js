let com=document.getElementById("comprobar");
const rts=document.getElementById("respuesta");
const nom=document.getElementById("nombre").value;
const ape=document.getElementById("apellido").value;
const mat=document.getElementById("materia").value;
    com.addEventListener('click', (com)=>{
        let name=parseInt(document.getElementById("nombre").value);
        let apell=parseInt(document.getElementById("apellido").value);
        let mat=parseInt(document.getElementById("materia").value);

        if(name=="1" && apell=="1" && mat=="1"){
            console.log(`El dato es correcto`);
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else if(name=="2" && apell=="2" && mat=="2"){
            console.log("El dato es correcto");
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else if(name=="3" && apell=="3" && mat=="3"){
            console.log("El dato es correcto");
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else if(name=="4" && apell=="4" && mat=="4"){
            console.log("El dato es correcto");
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else if(name=="5" && apell=="5" && mat=="5"){
            console.log("El dato es correcto");
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else if(name=="6" && apell=="6" && mat=="6"){
            console.log("El dato es correcto");
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else if(name=="7" && apell=="7" && mat=="7"){
            console.log("El dato es correcto");
            let texto=`<center> <h3>  <i class="bi bi-check-circle-fill"></i> EL DATO ES CORRECTO </h3></center>`
            rts.innerHTML=texto;

        }else{
            console.log("El dato es incorrecto");
            let texto=`<center> <h3>   <i class="bi bi-x-circle-fill"></i> EL DATO ES INCORRECTO </h3></center>`
            rts.innerHTML=texto;
        }
    });