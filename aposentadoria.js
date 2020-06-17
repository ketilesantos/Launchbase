/*Crie um programa para calcular a aposentadoria de uma pessoa.
Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos)*/


const nome = 'Silvana'
const sexo= 'M'
const idade = 48
const contribuicao = 10

const Calcontrib = idade + contribuicao

const HomemAposent = sexo === 'M' && contribuicao >= 35 && Calcontrib >=95
const MulherAposent = sexo === 'F' && contribuicao >=30 && Calcontrib >=85

if (HomemAposent || MulherAposent){
    console.log(`${nome}, você já pode se aponsentar!! `)
}else{
    console.log(`${nome}, você ainda não pode se aponsentar.`)
}
