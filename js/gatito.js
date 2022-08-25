let opciones=document.getElementById("opciones");
let resp=document.getElementById("respuesta");
opciones.addEventListener('click',(e)=>{
    e.preventDefault;
    if(e.target.id=="opcion1"){
        resp.innerHTML=`<br><center><h4>OPCIÓN INCORRECTA</h4></center>`;
        resp.classList.add("incorrecto");
        resp.classList.remove("correcto");

    }else if(e.target.id=="opcion2"){
        resp.innerHTML=`<br><center><h4>OPCIÓN INCORRECTA</h4></center>`;
        resp.classList.add("incorrecto");
        resp.classList.remove("correcto");

    }else if(e.target.id=="opcion3"){
        resp.innerHTML=`<br><center><h4>OPCIÓN CORRECTA</h4></center>`;
        resp.classList.add("correcto");
        resp.classList.remove("incorrecto");

    }else if(e.target.id=="opcion4"){
        resp.innerHTML=`<br><center><h4>OPCIÓN INCORRECTA</h4></center>`;
        resp.classList.add("incorrecto");
        resp.classList.remove("correcto");

    }else{

    }
});