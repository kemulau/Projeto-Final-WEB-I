let listaProdutos = [];

const carregarProdutos = () => {
  const urlProdutos = "http://localhost:3000/produtos";

  fetch(urlProdutos)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar produtos: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        console.log("Produtos carregados com sucesso:", data);
        listaProdutos = data;
        criarCards();
      } else {
        console.error("Resposta inválida da URL de produtos:", data);
      }
    })
    .catch((error) => {
      console.error("Erro ao carregar produtos:", error);
    });
};

const criarCards = () => {
  let container = document.querySelector(".container");

  listaProdutos.forEach((element) => {
    let card = `
      <div class="card">
        <img class="card-img" src="${element.img || './caminho/para/uma/imagem-padrao.jpg'}" />
        <h2 class="card-titulo">${element.produto}</h2>
        <p class="card-descricao">${element.descricao}</p>
        <a class="card-botao comprar" idProduto="${element.id}"> Comprar </a>
        <button class="card-botao excluir" idProduto="${element.id}"> Excluir </button>
      </div>
    `;

    container.innerHTML += card;
  });

  // Adicionar event listeners para os botões de excluir
  let listaCards = document.querySelectorAll(".card");

  listaCards.forEach((element) => {
    let botaoExcluir = element.querySelector(".excluir");
    botaoExcluir.addEventListener("click", () => {
      let produtoID = botaoExcluir.getAttribute("idProduto");
      excluirProduto(produtoID, element);
    });
  });
};

const excluirProduto = (idProduto, cardElement) => {
  const urlExclusao = `http://localhost:3000/produtos/${idProduto}`;

  fetch(urlExclusao, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na exclusão: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Produto excluído com sucesso:", data);
      cardElement.remove();
    })
    .catch((error) => {
      console.error("Erro ao excluir produto:", error);
    });
};

document.addEventListener("DOMContentLoaded", function () {
  carregarProdutos();
});
