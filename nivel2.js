var nome = document.getElementById('inome')
var user = document.getElementById('iusu')
var email = document.getElementById('iemail')
var senha = document.getElementById('isenha')

var nomeUser = []
var qualUser = []
var emailUser = []
var senhaUser = []

var limpaCampos = () =>{
    nome.value = ''
    user.value = ''
    email.value = ''
    senha.value = ''
}

function enviar(){
    nomeUser.push(nome.value)
    qualUser.push(user.value)
    emailUser.push(email.value)
    senhaUser.push(senha.value)
    limpaCampos()
}

console.log(nomeUser)
console.log(qualUser)
console.log(emailUser)
console.log(senhaUser)
