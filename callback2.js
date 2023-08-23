/*
Crear un arreglo
Acceder a elementos del arreglo: []
Longitud del arreglo: length
Modificar elementos del arreglo: []
Agregar elementos al final del arreglo: push
Eliminar elementos del final del arreglo: pop
Agregar elementos al inicio del arreglo: unshift
Eliminar elementos del inicio del arreglo: shift
Encontrar el índice de un elemento en el arreglo: indexOf
Eliminar elementos mediante el índice: splice
Recortar arreglo: slice
Encontrar si existe un elemento en el arreglo: includes
Unir elementos en un string: join
Unir dos arreglos: concat
Invertir un arreglo: reverse

---------------------------
Callbacks
---------------------------

filter
find
sort
forEach
...
*/

const array = ['a', 'b', 'c'];

array.forEach((item) => {
  console.log(item);
});

const miForEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    fn(item);
  }
};