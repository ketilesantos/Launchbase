/*Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
As tecnologias também devem ser objetos contendo nome e especialidade*/

const programador = {
    nome: 'Ketile',
    idade: 20,
    ProprieTech:[
       {
        nome: "C++", especialidade: 'Desktop'
       },
      { 
          nome: 'JavaScript', especialidade:'Web/Mobile'
      }
    ]
}

console.log(`A usuária ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.ProprieTech[0].nome} com especialidade em ${programador.ProprieTech[0].especialidade}`)
