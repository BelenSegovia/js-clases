class Usuario {
    constructor(id, nombreUsuario, fechaNacimiento, edad, localidad, email, password){
        // puedo nombrarlas igual o diferente
        //no hace falta que estén ordenadas
        //PROPIEDADES
        //siempre van a tener un IDentificador
        this.id= id;
        this.name= nombreUsuario;
        this.password= password;
        this.fechaNacimiento= fechaNacimiento;
        this.email= email;
        this.edad= edad;
        this.localidad= localidad;
        this.estadoActivo= true;
    }
    // MÉTODO
    login(){
        console.log(`Bienvenido ${this.name}`);
    }
    logout(){
        console.log(`Adiós ${this.name}`);
    }
}

//INSTANCIAR: Crear un usuario a partir de una clase

//new: Objeto(bianca) que va a ser un nuevo usuario
let bianca= new Usuario(1, 'Biancatuturrita', '03/10/96', 26, 'Miami', 'tuturri@gmail.com', '123456789');

console.log(bianca);