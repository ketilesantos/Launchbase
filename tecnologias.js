/*Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array)
Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false
*/
const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'NodeJs']
    }
]

 for (let usuario of usuarios){
     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
 }

 function checkUsuarioCss(usuario){
    for (tecnologias of usuario.tecnologias){
        if (tecnologias == 'CSS')
        return true
    }
    return false
 }

 for (let i = 0; i < usuarios.length; i++){
    const TrabCss = checkUsuarioCss(usuarios[i])
    if (TrabCss){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
