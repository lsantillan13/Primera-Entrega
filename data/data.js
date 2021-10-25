function People(name, password, isAdmin){
    this.name = name;
    this.password = password;
    this.isAdmin = isAdmin;

    this.getUser = function (){
        console.log(`Nombre: ${name}, Contraseña: ${password}, Status: ${isAdmin}`);
    }
}
let newUser = new People("Lautaro", "pajarito123", true);
let newUser1 = new People("Juan", "pajarito123", false);

newUser.getUser();
newUser1.getUser();


// const user = {}
// const admin = {}
// const userList = [user, admin];

