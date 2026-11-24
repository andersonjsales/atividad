let ListaProdutos = document.querySelector(".ListaProdutos")
function criarCard(title,category,image,price) {
    let CardProdutos = document.createElement("div");
    let ProdutoImagem = document.createElement("img");
    let ProdutoNome = document.createElement("div");
    let informacoes = document.createElement("div");
    let ProdutoPreco = document.createElement("span");
    let ProdutoCategoria = document.createElement("span");
    let ProdutoComprar = document.createElement("button");

    CardProdutos.classList.add("CardProduto")
    ProdutoImagem.classList.add("ProdutoImagem")
    ProdutoNome.classList.add("ProdutoNome")
    informacoes.classList.add("informacoes")
    ProdutoPreco.classList.add("ProdutoPreco")
    ProdutoCategoria.classList.add("ProdutoCategoria")
    ProdutoComprar.classList.add("ProdutoComprar")

    return CardProdutos;
}

async function buscarProdutos() {
    let url = "https://fakestoreapi.com/products";
    let resposta = await fetch(url);
    let data = await resposta.json();

    return data;
}

buscarProdutos();