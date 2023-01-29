var calculadora = require( "./1.8Calculadora");
	
console.log( calculadora.soma ( 10, 20 ));
console.log( calculadora.sub ( 10, 20 ));
console.log( calculadora.mult ( 10, 20 ));
console.log( calculadora.div ( 10, 20 ));

console.log( calculadora.nome);
calculadora.nome = "Lançou a Braba!!"
console.log( calculadora.nome);

