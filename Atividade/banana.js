

//lista de objetos
const catalogo = [
    {
    id: 1,
    nome: "Tulipa Vermelha",
    alt: "Produto 1 Tulipa",
    marca: "Flores Bella",
    preco: 200.00,
    nomeImg: "img-1-Ecommerce.jpg"
},{
    id: 2,
    nome: "Buque de Girassol",
    alt: "Produto 2 Girassol",
    marca: "Flores Bella",
    preco: 100.00,
    nomeImg: "img-2-Ecommerce.jpg"
},{
    id:3,
    nome: "Buque de Rosas",
    alt: "Produto 3 Rosas",
    marca: "Flores Bella",
    preco: 250.00,
    nomeImg: "img-3-Ecommerce.jpg"
}];



//Craze(`) serve como o ""
for(const produtoCatalogo of catalogo){
    const cartaoProduto = `
        <div id="card-produto-1">
            <img 
            src="././assets/${produtoCatalogo.nomeImg}" 
            alt="${produtoCatalogo.alt}"
            style="height: 350px"
            />
            <p>${produtoCatalogo.marca}</p>
            <p>${produtoCatalogo.nome}</p>
            <p>R$ ${produtoCatalogo.preco}</p>
            <button>
                Adicionar ao carrinho
            </button>
        </div>`
    ;
};

//getElementByID pega o ID do HTMLH
//innerHTML pega o dentro do conteudo HTML e acrescenta o cartaoProduto
document.getElementById("container-produto").innerHTML += cartaoProduto;
