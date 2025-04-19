const express = require("express")

const router = express.Router()



const app = express()

const porta = 3333



function mostraMulher(request, response) {

 response.json({

    nome: 'Simara Conceição',

    imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1563116727615?e=1750291200&v=beta&t=HIMSVdI3Gcr6a6p5htJRomRt83QucvDqP2Ygok9xoYg',

    minibio: 'Desenvolvedora e instrutora'

 })

}



function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}



app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)

