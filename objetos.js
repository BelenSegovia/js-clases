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
    reproducir: function(){
        document.write('La película se está reproduciendo');
    },
    pausar: ()=> {
        document.write('La pel{icula está pausada');
    }
}