//const name = 'Ketile Pimenta dos Santos'
//console.log(name)

/*const aluno01 = 'Ketile'
const aluno02 = 'Mayk'
const Ntaluno01 = 0
const Ntaluno02 = 10

const media = (Ntaluno01 + Ntaluno02) /2

if (media > 5){
    console.log(`A media foi de ${media}... Parabéns `)
}else {
    console.log(`A media foi de menor que 5`)
}

---------------------------------------------------------------------------*/


/*Outro metodo trabalhando com objetos

const aluno01 = {
    nome: 'Ketile',
    nota: 10
}
const aluno02 = {
    nome: 'Mayk',
    nota: 6
}
const aluno03 = {
    nome: 'Kessy',
    nota: 7
}
const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3
if (media > 5){
    console.log(`A media foi de ${media}... Parabéns!!`)
}else {
    console.log(`A media foi de menor que 5`)
} 

---------------------------------------------------------------------------*/


/*Outro metodo trabalhando com ARRAY/Vetores

const alunos = [
    {
        nome: 'Ketile',
        nota: 10
    },
    {
        nome: 'Mayk',
        nota:6.6
    },
    {
        nome: 'Kessy',
        nota: 7
    }
]
console.log(alunos)
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
if (media > 5){
    console.log(`A media foi de ${media}... Parabéns!!`)
}else {
    console.log(`A media foi de menor que 5`)
} 
---------------------------------------------------------------------------*/

/* Trabalhando com Function

const turmaA = [
    {
        nome: 'Ketile',
        nota: 10
    },
    {
        nome: 'Mayk',
        nota:6.6
    },
    {
        nome: 'Kessy',
        nota: 7
    }
]

const turmaB = [
    {
        nome: 'João',
        nota: 5
    },
    {
        nome: 'Luisa',
        nota: 0
    },
    {
        nome: 'Kassy',
        nota: 6.7
    }
]


function CalcMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
}

const media1 = CalcMedia(turmaA)
const media2 = CalcMedia(turmaB)

function enviaMensagem(media, turma){
    if (media > 5){
        console.log(`A media da ${turma} foi de ${media}... Parabéns!!`)
    }else {
        console.log(`A media da ${turma} foi de menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
---------------------------------------------------------------------------*/


/* Estrutura de Repetição */

const turmaA = [
    {
        nome: 'Ketile',
        nota: 10
    },
    {
        nome: 'Mayk',
        nota:6.6
    },
    {
        nome: 'Kessy',
        nota: 10
    }
]

const turmaB = [
    {
        nome: 'João',
        nota: 5
    },
    {
        nome: 'Luisa',
        nota: 0
    },
    {
        nome: 'Kassy',
        nota: 6.7
    },
    {
        nome: 'Jaqueline',
        nota: 8.6
    }
]


function CalcMedia(alunos){
    let soma = 0
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota;
    }
    const media = soma / alunos.length
    return media 
}
    

const media1 = CalcMedia(turmaA)
const media2 = CalcMedia(turmaB)

function enviaMensagem(media, turma){
    if (media > 5){
        console.log(`A media da ${turma} foi de ${media}... Parabéns!!`)
    }else {
        console.log(`A media da ${turma} foi de menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

/*
const idade = 17

if (idade >=18){
    console.log('Deixar entrar')
}else {
    console.log('Bloquear Entrada')
}

if (idade == 17){
    console.log('Volte quando estiver com 18 anos')
}
*/


/*
const idade = 18

if (!(idade >= 18) && idade == 17){
    console.log('Bloquear Entrada')
}else {
    console.log('Deixar entrar')
}
---------------------------------------------------------------------------*/


