// 1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre, email y edad, con valores asignados por ti.
// 2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el arreglo del primer paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente).

var items = [
  {nombre: 'Diego', email: 'diego@acd.com', edad: 28},
  {nombre: 'Jose', email: 'jose@acd.com', edad: 18},
  {nombre: 'Kevin', email: 'kevin@acd.com', edad: 23},
  {nombre: 'Andres', email: 'andres@acd.com', edad: 19},
  {nombre: 'Joselyn', email: 'joselyn@acd.com', edad: 34}
];
var correos = [
  items[0].email,
  items[1].email,
  items[2].email,
  items[3].email,
  items[4].email,
];

console.log(correos);