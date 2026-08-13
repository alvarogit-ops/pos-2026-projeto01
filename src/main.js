import './style.css'
import { buscarProdutos } from './api.js'

const titulo = 'Meu projeto DummyJson'
const descricao = 'Produtos da DummyJson'
document.querySelector('#app').innerHTML = `<h1>${titulo}</h1><p>${descricao}</p>`

const produtos = await buscarProdutos()

const produto = produtos.products[0]



document.querySelector('#app').innerHTML += `
<h1>${produto.title}</h1>
<h1>${produto.price}</h1>
`

