/*function saludar(/Parámetro - imput/){
    /lo que hace/

    return /lo que devuelve/
} */
// FUNCIONES ------------------------------------------------------- 

function saludar(nombre){ //ya declaro a la variable desde la función
    console.log(`Hola ${nombre}`)
//  saludar(nombre); recursividad
}
saludar('Juan');

function saludarMundo(){
    console.log('Hola! Bienvenido/a a nuestro sitio web');
}

//const calculadora = (num1, num2, operacion) => {
function calculadora(num1, num2, operacion){
    let resultado = 0;
    switch(operacion){
        case 'suma': {
            resultado= num1 + num2;
            break;
        }
        case 'resta': {
            resultado= num1 - num2;
            break;
        }
        case 'multiplicacion': {
            resultado= num1 * num2;
            break;
        }
        case 'division': {
            if(num2===0){
                console.error('El denominador no puede ser 0');
                return null;
            }
            resultado= num1 / num2;
            break;
        }
        default: {
            console.error('No ingresó una operación válida');
        }
    }
    return resultado;
}

// Arrow function = () => función de flecha
const saludarGabi = () =>{
    console.log('Hola Gabi! Bienvenido a nuestro sitio web');
}

// OTRA LÓGICA -----------------------------------------------

const num1= Number(prompt('Ingrese el primer número'));
const num2= Number(prompt('Ingrese el segundo número'));

if(isNaN(num1) || isNaN(num2)){
    alert('Ingresa un número válido');
} else {
    const resultado= calculadora(num1,num2,'division');
    console.log(resultado);
}
