/*Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa*/

const nome = 'Carlos'
const peso = 65
const altura = 1.60

const imc = peso /(altura*altura)

if (imc >= 30){
    console.log(`Carlos você está acima do peso, com o IMC de ${imc}`)
}else {
    console.log(`Carlos você não está acima do peso e seu IMC é de ${imc}`)
}