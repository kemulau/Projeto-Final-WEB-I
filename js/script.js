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
        <img class="card-img" src="${element.img}" />
        <h2 class="card-titulo">${element.produto}</h2>
        <p class="card-descricao">${element.descricao}</p>
        <a class="card-botao comprar"> Comprar </a>
        <button class="card-botao excluir" idProduto="${element.id}"> Excluir </button>
      </div>
    `;

    container.innerHTML += card;
  });

  // Adiciona o event listeners para os botões de excluir e comprar
  let listaCards = document.querySelectorAll(".card");

  listaCards.forEach((element) => {
    let botaoExcluir = element.querySelector(".excluir");
    botaoExcluir.addEventListener("click", () => {
      let produtoID = botaoExcluir.getAttribute("idProduto");
      excluirProduto(produtoID, element);
    });

    let botaoComprar = element.querySelector(".comprar");
    botaoComprar.addEventListener("click", () => {
      let produtoID = botaoComprar.getAttribute("idProduto");
      redirecionarParaComprar(produtoID);
    });
  });
};

const redirecionarParaComprar = (produtoID) => {
  window.location.href = `comprar.html?id=${produtoID}`;
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
