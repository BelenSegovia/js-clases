/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:

Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt('Ingrese un texto');

for (let i=0; i < texto.length; i += 1){
    let letra = texto.at(i).toLowerCase();
   // console.log(letra);
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log('La vocal', letra, 'está en la posición', i);
        break;
    }
}