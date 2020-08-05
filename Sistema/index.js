/* batata_doce, laranja, maca, banana, uva, morango, alface, jilo, 
coentro, cheiro_verde, ovo, abacaxi, melao, melancia, pimentao, pimenta,
manga, maracuja, limao, pera, mamao */


// Parte de configurações
function alterarPreco(produto, precoNovo){
        produto.preco = precoNovo
}

function alterarNome(produto, novoNome){
        produto.nome = novoNome
}

function alterarCodigo(produto, novoCodigo){
        produto.codigo = novoCodigo
}
//


// Parte de vendas
var totalPreco = 0
var totalItens = 0

function vender(produto = 0, peso){
    produt = produto.codigo
    const preco = produt.preco*peso
    console.log(produto.nome, `${peso}kg: R$${preco.toFixed(2)}`)
    totalPreco += preco
    totalItens += 1
    console.log(`Total de itens: ${totalItens}`)
    console.log(`Total a pagar: R$${totalPreco.toFixed(2)}`)
// Usando regra de 3, multiplicamos o preço do kg do produto pelo seu peso em kg
}

function concluir(valorPago = 0){
    // Essa função será chamada apenas quando o cliente concluir a compra
    // valorPago é o valor que o cliente deu ao efetuar o pagamento.
    if(valorPago == 0){
        console.log('Sem troco')
    } else {
        const troco = valorPago - totalPreco.toFixed(2)
        console.log(`Troco para R$${valorPago}`)
        console.log(`Devolver R$${troco.toFixed(2)} ao cliente.`)
    }
    totalPreco = 0
    totalItens = 0
}

function cancelar(produto = 0){
    // Essa será chamada só quando um cliente cancelar a compra ou um item específico
    if(produto != 0){
        totalPreco -= produto.preco
        totalItens -= 1
        console.log(`Retirada de R$${produto.preco.toFixed(2)}`)
        console.log(`Valor total: R$${totalPreco.toFixed(2)}`)
    } else{
        console.log('Venda cancelada') 
        totalPreco = 0
        totalItens = 0
    }
}


// Mercadorias
const tomate = {
    nome: 'tomate',
    preco: 1.99,
    codigo: 001
}

const batata = {
    nome: 'batata',
    preco: 4.99,
    codigo: 002
}

const cenoura = {
    nome: 'cenoura',
    preco: 3,
    codigo: 3
}

const abobora = {
    nome: 'abobora',
    preco: 2.89,
    codigo: 4
}

const abobrinha = {
    nome: 'abobrinha',
    preco: 1.69,
    codigo: 5
}
const inhame = {
    nome: 'inhame',
    preco: 1.95,
    codigo: 6
}
const batata_doce = {
    nome: 'batata doce',
    preco: 3.89,
    codigo: 7
}
const laranja = {
    nome: 'laranja',
    preco: 2.99,
    codigo: 8
}
const melao = {
    nome: 'melao',
    preco: 5,
    codigo: 9
}
const ovo = {
    nome: 'ovo',
    preco: 12,
    codigo: 10
}
const maca = {
    nome: 'maca',
    preco: 4.99,
    codigo: 11
}

const produtos = [tomate, batata, cenoura, abobora, abobrinha, inhame, batata_doce, 
laranja, maca, ovo, melao]

// DOM...


const prod = document.getElementById('produto').value
const pr = Number(prod)
const peso = document.getElementById('peso').value
const p = Number(peso)
const conclui = document.getElementById('concluir')
conclui.onclick = function() {
    vender(pr, p)
    concluir()
    console.log(`Você comprou ${p}kg de ${pr}`)
}








