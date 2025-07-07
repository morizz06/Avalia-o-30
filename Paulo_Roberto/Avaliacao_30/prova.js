//EXERCICIO 1

let nome = "Paulo roberto" 
console.log("meu nome é " + nome + ".")

let idade = 18  
console.log("Tenho " + idade + " anos.")


//EXERCICIO 2

let nota = 6

if(nota >= 7){
    console.log("Aprovado.")
}else if (nota >=5 && nota<7){
    console.log("Recuperação")
}else if(nota < 5){
    console.log("reprovado")
}


//EXERCICIO 3

for(let x = 1; x<=21 ; x+=2){
    console.log(x)
}


// Exercício 4

let frutas = ["Maçã", "Banana", "Laranja", "Morango", "Abacaxi"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}



