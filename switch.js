// SWITCH ------------------------

let numero = 1; 

if (numero === 1){
    console.log('El número es igual a 1');
} else if (numero === 2) {
    console.log('El número es igual a 2');
} else if (numero === 3) {
    console.log('El número es igual a 3');
} else if (numero === 4) {
    console.log('El número es igual a 4');
}  else if (numero === 5) {
    console.log('El número es igual a 5');
} else {
    console.log('El número no es del rango válido');
}

switch (numero) {
    case 1: {
        console.log('El número es igual a 1');
        break;
    }
    case 2: {
        console.log('El número es igual a 2');
        break;
    }
    case 3: {
        console.log('El número es igual a 3');
        break;
    }
    case 4: {
        console.log('El número es igual a 4');
        break;
    }
    case 5: {
        console.log('El número es igual a 5');
        break;
    }
    default: {
        console.log('El número no es del rango válido');
    }
}