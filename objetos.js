// Creación de objeto con notación literal
// Cuando queremos crear sólamente 1 objeto

let duracionPelicula= '02:15';

// creación de objeto. Se crea con {}
const pelicula = {
    //propiedades -> clave: valor
     titulo: 'Barbie',
     duracion: duracionPelicula,
     genero: ['comedia', 'drama', 'musical', 'fantasia'],
     fechaDeEstreno: '3 de Agosto, 2023',
     estreno: false,
    //  actores: {
    //     actorPrincipal: 'Gabi',
    //     actoresSecundarios: [Eze, {}],
    //  }

    //métodos
    reproducir(){
        //más utilizado
        document.write('La película se está reproduciendo');
    },
    adelantar: function(){
        document.write('La película se está avanzanda rápidamente');
    },
    pausar: ()=> {
        document.write('La pel{icula está pausada');
    },
    mostrarDatos(){
        //como no puedo llamar al objeto dentro del mismo objeto, utilizo THIS para acceder a la propiedad, titulo
        document.write(`${this.titulo}`);
    }
}


// ACCEDIENDO A LAS PROPIEDADES DE NUESTRO OBJETO-PELICULA 


console.log(pelicula);
// document.write(pelicula);

// object de tipo Object
document.write(`<h5>${pelicula}</h5>`);
//accedemos a la propiedad título de nuestro obj pelicula
document.write(`<h1>${pelicula.titulo}</h1>`);
console.log(pelicula.titulo);
// accedemos a la propiedad genero de nuestro obj pelicula
document.write(`<h2>${pelicula.genero}</h2>`);

//otra forma de acceder a la propiedad fecha de estreno de nuestro obj pelicula
//poco común
document.write(`<p>${pelicula['fechaDeEstreno']}</p>`);


// MODIFICANDO LAS PROPIEDADES DE NUESTRO OBJETO

pelicula.duracion= '2:00',
document.write(`<p>${pelicula.duracion}</p>`);

// Agregar una propiedad a solo 1 objeto
pelicula.clasificacion= '+13',
console.log(pelicula);

// Eliminar una propiedad a mi objeto
//No se suele utilizar, pero existe
delete pelicula.estreno

// Accedemos al método de nuestro Objeto. Como es función va con ()
pelicula.reproducir()

pelicula.mostrarDatos()

