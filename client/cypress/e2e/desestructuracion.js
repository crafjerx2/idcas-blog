
const user = {
  nombre: 'crafjer',
  email: 'crafjer@gmail.com',
  password: '123456' 
}

console.log('*************************************')
console.log('sin desestructuracion');
console.log(`Mi usuario es ${user.name}, mi email es ${user.email} y passsowrd es ${user.password}`);

console.log('*************************************')
console.log('Con desestructuracion');


const {nombre, email, password} = user;
console.log(`Mi usuario es ${nombre}, mi email es ${email} y passsowrd es ${password}`);


const nombres = ['carlos', 'maria', 'jose'];
const [carlos, maria, jose] = nombres;
console.log(`Hola ${carlos}, ${maria} y ${jose}`)









