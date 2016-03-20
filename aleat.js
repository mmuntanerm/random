// Genera numeros aleatorios y los compara con 0.5
// Repite el proceso un numero 'veces' de ocasiones
// Language: 	Node.js
// --> Test program.
//

// fase 1
var veces =10;
var mayor =0;
var menor =0;

console.log("#################################################################\n");
console.log("Genera numeros aleatorios y los compara con 0.5 \n");
console.log("Repite el proceso " + veces + " veces \n");
console.log("##################################################################\n");
console.log("\n");

for (var i = 0; i < veces; i++) {

		var numero = Math.random();

		console.log('El numero es : ' + numero);

		if (numero <= 0.5)
		{
			console.log("MENOR QUE 0.5");
			menor++;
		}
		else
		{
			console.log("MAYOR  que 0.5");
			mayor++;
		}

}
console.log(" ------------------------------------------------ \n");
console.log("Los numero aleatorios han salido " + mayor + " veces mayor que 0.5");
console.log("Los numero aleatorios han salido " + menor + " veces MENOR que 0.5");
console.log(" ------------------------------------------------ \n");
console.log("\n");
