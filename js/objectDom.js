console.log( document.getElementById("features"));

console.log( document.querySelector("h1"));
console.log( document.querySelector(".feature"));
console.log( document.querySelector("#features"));

console.log( document.querySelectorAll("p")[1]);

document.querySelectorAll("p").forEach((el)=>console.log(el));

document.querySelector("a").setAttribute("href","https://www.youtube.com/");
console.log( document.querySelector("a").getAttribute("href"));

const mi=document.querySelector("#features");

mi.style.setProperty("color", "#FFFFFF");
mi.style.setProperty("width","500px");
mi.style.setProperty("background","#B22222")


const mic=document.querySelector(".miclase");
let text=`<p> el dom es bla bla bla </p> <p> se puede acceder y modificar </p>`
mic.innerHTML=text

const img =document.createElement("img");
img.src= "https://media.tenor.com/images/7f0ef936a94e093d1355859ca7da5c82/tenor.png";
document.body.appendChild(img);

img.remove();

const caja=document.createElement("div")
caja.innerHTML="<img src='https://media.tenor.com/images/7f0ef936a94e093d1355859ca7da5c82/tenor.png'>"

mic.appendChild(caja);




