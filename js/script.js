let listaProdutos = [
  {
    idProduto: 1,
    nome: "Pomada de CBD",
    descricao:
      "A pomada à base de canabidiol é um produto que se mostra eficaz no tratamento e alívio de sintomas de doenças variadas.",
    img: "./img/card1.jpg",
  },
  {
    idProduto: 2,
    nome: "Óleo de CBD 3%",
    descricao:
      "Ajuda a aliviar as doenças do corpo, mas também os estados emocionais. Usado na massagem, alivia as dores nas articulações, músculos, mas também os problemas de pele.",
    img: "./img/card2.jpg",
  },
  {
    idProduto: 3,
    nome: "Óleo de CBD orgânico 5% ",
    descricao:
      "Para produzirmos o óleo de CBD, o próprio CBD é extraído do cânhamo, é purificado e de seguida destilado, antes de ser adicionado ao óleo de transporte, neste caso óleo MCT orgânico.",
    img: "./img/card3.jpg",
  },
];

const criarCards = () => {
  let container = document.querySelector(".container");

  listaProdutos.forEach((element) => {
    let card = `
      <div class="card">
        <img class="card-img" src="${element.img}" />
        <h2 class="card-titulo">${element.nome}</h2>
        <p class="card-descricao">${element.descricao}</p>
        <a class="card-botao comprar" idProduto="${element.idProduto}"> Comprar </a>
        <button class="card-botao excluir" idProduto="${element.idProduto}"> Excluir </button>
      </div>
    `;

    container.innerHTML += card;
  });
};

document.addEventListener("DOMContentLoaded", function () {
  criarCards();

  let listaCards = document.querySelectorAll(".card");

  listaCards.forEach((element) => {
    let botaoExcluir = element.querySelector(".excluir");
    botaoExcluir.addEventListener("click", () => {
      let produtoID = botaoExcluir.getAttribute("idProduto");
      excluirProduto(produtoID, element);
    });
  });

  function excluirProduto(idProduto, cardElement) {
    let urlExclusao = `https://jsonplaceholder.typicode.com/posts/${idProduto}`;

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
  }
});

//mouseover
//mouseout

let listaCards = document.querySelectorAll(".card");

listaCards.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("change-scale");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("change-scale");
  });

  element.lastElementChild.addEventListener("click", (event) => {
    event.preventDefault();
    let produtoSelecionado = element.lastElementChild.getAttribute("idProduto");
    sessionStorage.setItem("produtoSelecionado", produtoSelecionado);
    window.location.href = "./comprar.html";
  });
});
