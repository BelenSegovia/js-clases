/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
 */ 

// con while -> En bucles infinitos es mejor while
let cadena= ''; // string vacío
while(true){
    let texto= prompt('Ingrese texto');
    
    if(texto === null) {
        break;
    }

    cadena= cadena + '-' + texto;
//  console.log(texto);
}

console.log(`CADENA : ${cadena}`);

// con for 
/* Es equivalente al while
for ( ; true ; ) {
let texto= prompt('Ingrese texto');
    console.log(texto);

}*/