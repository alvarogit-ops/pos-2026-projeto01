import './style.css'
import { buscarProdutos } from './api.js'

const titulo = 'Meu projeto DummyJson'
const descricao = 'Produtos da DummyJson'

document.querySelector('#app').innerHTML = `
    <h1>${titulo}</h1>
    <p>${descricao}</p>

    <select id="categoria">
        <option value="groceries">Comida</option>
        <option value="beauty">Beleza</option>
        <option value="fragrances">Fragrâncias</option>
        <option value="furniture">Móveis</option>
        <option value="mens-shirts">Camisas masculinas</option>
        <option value="mens-shoes">Calçados masculinos</option>
        <option value="laptops">Notebooks</option>
        <option value="smartphones">Smartphones</option>
    </select>

    <div id="produto"></div>
`

const select = document.querySelector('#categoria')
const areaProduto = document.querySelector('#produto')

select.addEventListener('change', async () => {
    const categoria = select.value

    const produtos = await buscarProdutos(categoria)

    const produto = produtos.products

    areaProduto.innerHTML = ''

    produtos.products.forEach(produto => {
       areaProduto.innerHTML += `
    <div class="card-produto">
        <img src="${produto.images[0]}">

        <div class="info-produto">
            <h2>${produto.title}</h2>
            <p>Preço: R$ ${produto.price}</p>
        </div>
    </div>`
    })
   
})