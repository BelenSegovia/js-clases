'use strict'
//document.write método viejo 

const h1 = document.querySelector('h1')
console.log(h1);

console.log(h1.innerText)

h1.innerText= 'Ahora ya no es un título feliz 😠'
h1.style.color= 'red';
//font-family -> fontFamily
h1.style.fontFamily = 'Courier';

//const texto= document.querySelector('#texto');
const texto= document.getElementById('texto');
texto.innerText = 'Chau';

const links= document.getElementsByClassName('links');
// devuelve arreglo de nodos
console.log(links);

for(let i = 0; i<links.length; i+=1){
links[i].style.backgroundColor= 'blue';
}

// Array(links).forEach((item)=> {
//     item.style.backgroundColor = 'blue';
// }) 

let suma= 0;
suma += 5;

const nav= document.querySelector('nav');
nav.innerHTML += '<h2>Holaaaa</h2>'

//Proceso de 3 pasos
//1- Crear nodo
const img = document.createElement('img')
// 2- Darle las propiedades
img.src= 'https://www.mundodeportivo.com/alfabeta/hero/2022/12/EP1205_Excadrill_de_Iris.1671521331.2841.png?width=768&aspect_ratio=16:9&format=nowebp'
img.alt= 'Super Mario'
img.style.width= '200px';
img.className= 'rounded'; // se usa pero no es lo mejor
img.classList.add('border'); // classList más recomendado
img.classList.remove('rounded');

// 3- Agregarlo al documento (HTML) Hijo de algún elemento
const footer= document.querySelector('footer');
footer.appendChild(img);

texto.remove()