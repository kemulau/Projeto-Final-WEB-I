let listaProdutos = [];

const carregarProdutos = async () => {
  const urlProdutos = "http://localhost:3000/produtos";

  try {
    const response = await fetch(urlProdutos);
    if (!response.ok) {
      throw new Error(`Erro ao carregar produtos: ${response.status}`);
    }
    const data = await response.json();
    
    if (Array.isArray(data)) {
      console.log("Produtos carregados com sucesso:", data);
      listaProdutos = data;
      renderizarCards();
    }
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
};

const criarCard = (produto) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img class="card-img" src="${produto.img}" />
    <h2 class="card-titulo">${produto.produto}</h2>
    <p class="card-descricao">${produto.descricao}</p>
    <a class="card-botao comprar" idProduto="${produto.id}"> Comprar </a>
    <button class="card-botao excluir" idProduto="${produto.id}"> Excluir </button>
  `;

  adicionarEventosCard(card, produto.id);
  return card;
};

const adicionarEventosCard = (card, produtoID) => {
  const botaoExcluir = card.querySelector(".excluir");
  botaoExcluir.addEventListener("click", () => excluirProduto(produtoID, card));

  const botaoComprar = card.querySelector(".comprar");
  botaoComprar.addEventListener("click", () => redirecionarParaComprar(produtoID));
};

const renderizarCards = () => {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Limpa o container antes de renderizar

  listaProdutos.forEach((produto) => {
    const card = criarCard(produto);
    container.appendChild(card);
  });
};

const redirecionarParaComprar = (produtoID) => {
  window.location.href = `comprar.html?id=${produtoID}`;
};

const excluirProduto = async (idProduto, cardElement) => {
  const urlExclusao = `http://localhost:3000/produtos/${idProduto}`;

  try {
    const response = await fetch(urlExclusao, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Erro na exclusão: ${response.status}`);
    }
    const data = await response.json();
    console.log("Produto excluído com sucesso:", data);
    cardElement.remove();
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
  }
};

document.addEventListener("DOMContentLoaded", carregarProdutos);