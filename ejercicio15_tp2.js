/* 15- Realiza un script que cuente el número de vocales que tiene un texto.
PASOS
1- Pedir un texto
2- Ir por cáda caracter buscando las vocales, contándolas
3- mostrar el resultado
*/

const texto = prompt("Escribe un texto:");

let cantidadDeVocales= 0;
for(let i=0; i < texto.length; i+=1){
    const letra = texto.at(i).toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        cantidadDeVocales += 1;
    }
}

console.log(cantidadDeVocales);