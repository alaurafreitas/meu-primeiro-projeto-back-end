const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
const mulheres = [
    {
        nome: 'Simara Conceição',

        imagem: 'https://media.licdn.com/dms/image/v2/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1563116727615?e=1750291200&v=beta&t=HIMSVdI3Gcr6a6p5htJRomRt83QucvDqP2Ygok9xoYg',

        minibio: 'Desenvolvedora e instrutora'
    },

    {   nome: 'Giulia Bordignon',

        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQEwZ3yq32pJWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725997130492?e=1750291200&v=beta&t=ZMl4UiYGw963HLlHoai70PKc41eOJjILtfM3XiavNIo',

        minibio: 'Programadora backend, embaixadora da Alura '
    },

    { nome: 'Bianca Alves',
        imagem:'https://media.licdn.com/dms/image/v2/D5603AQEAp8D4mTXq6g/profile-displayphoto-shrink_800_800/B56ZWkq463GUAg-/0/1742224462258?e=1750291200&v=beta&t=jtS4AWdSaTB3ul_7c0QtzH2FYntmkVqhMkNJ6SUtcuc',
        minibio: 'Desenvolvedora frontend com foco em interfaces web, acessibilidade e boas práticas de UI/UX. '

    }
]

function mostraMulheres(request, response) {
 response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
