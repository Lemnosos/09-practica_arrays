let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//Obtener primer elemento
console.log(lista[0])

//Obtener último elemento
console.log(lista[lista.length - 1])

//agregar un elemento al inicio de la lista
lista.unshift(0)
console.log(lista)

//eliminar primer elmento de la lista
let eliminado = lista.shift()
console.log(`se ha borrado ${eliminado} de la lista`)
console.log(lista)

//agregar un elemento al final de la lista
lista.push(21)
console.log(lista)

//eliminar el ultimo elemento del array
let ultimoEliminado = lista.pop()
console.log(`se ha borrado ${ultimoEliminado} de la lista`)
console.log(lista)

//unir dos arrays
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = array1.concat(array2)
console.log(array3)

//encontrar elemento en array
let buscado = 5
let encontrado = array3.find(element => element == buscado)
console.log(` El ${buscado} está en el array: ${encontrado}`)

//sumar todos los elementos de un array
let suma = lista.reduce((acc, element) => acc + element, 0)
console.log(`La suma de los elementos del array es: ${suma}`)

//array multiplicado por 5
let multiplicado = lista.map(element => element * 5)
console.log(`El array multiplicado por 5 es: ${multiplicado}`)

//filtrar numeros mayores a un valor n
let n1 = 10
let filtrados = lista.filter(element => element > n1)
console.log(`Los números mayores a ${n1} son: ${filtrados}`)

//verificar si todos los numeros son mayores a un valor n
let n2 = 21
let todosMayores = lista.every(element => element > n2)
console.log(`¿Todos los números son mayores a ${n2}? ${todosMayores}`)

//obtener primer elemento en cumplir una condicion
let n3 = 15
let primerMayor = lista.find(element => element % n3 == 0)
console.log(`El primer multiplo de ${n3} es: ${primerMayor}`)

//imprimir cada elemento del array
console.log(`Los elementos del array son: `)
lista.forEach(element => console.log(element))

//convertir array de nombres en mayusculas
let nombres = ["alejandro", "rafa", "carlos", "iñigo"]
let nombresMayus = nombres.map(nombre => nombre.toUpperCase())
console.log(`Los nombres en mayusculas son: ${nombresMayus}`)