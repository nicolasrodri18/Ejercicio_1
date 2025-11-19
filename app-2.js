let numeros = [2, 4, 6, 8, 10];
// Recorra el arreglo utilizando for y escriba los valores.
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// • Recorra el mismo arreglo utilizando for...of y escriba los valores.
for (let num of numeros) {
    console.log(num);
}
// • Explique en una frase la diferencia observada entre los dos recorridos.
//La diferencia es que el bucle for utiliza un índice para acceder a cada 
//elemento del arreglo, mientras que for...of itera directamente sobre los valores del arreglo 
// sin necesidad de un índice.