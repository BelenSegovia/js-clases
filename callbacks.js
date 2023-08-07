let emojis= ['😩', '😠', '🤕'];
let alumnos= ['Bianca', 'Ernesto', 'Enzo', 'Martin', 'Belen'];


// Invertir un arreglo

const nuevosEmojis2= emojis.reverse()
console.log(nuevosEmojis2);

// forEach => recorre el arreglo
// función anónima que se le pasa otra función por los parámetros
//emojis.forEach(function(){});
/*
const calculadora= () => {
    //...
}
emojis.forEach(calculadora); */

// FOR EACH
console.log(emojis.length);
emojis.forEach((item)=>{
    console.log(item);
});

//EQUIVALENTE
for (let i=0; i<emojis.length; i+=1){
    const item= emojis[i];
    console.log(item);
}

const alumnosFiltrados= alumnos.filter((item)=>{
    return item.charAt(0).toLowerCase() === 'e'; 
});
console.log(alumnosFiltrados);