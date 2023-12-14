document.addEventListener("DOMContentLoaded", function () {
  // obtém todas as compras enviadas
  fetch("http://localhost:3000/compras")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao obter detalhes de todas as compras: ${response.status}`);
      }
      return response.json();
    })
    .then((compras) => {
      exibirDetalhesCompras(compras);
    })
    .catch((error) => {
      console.error("Erro ao obter detalhes de todas as compras:", error);
    });
});

function exibirDetalhesCompras(compras) {
  // Seleciona o elemento em que os detalhes das compras serão exibidos no html
  const detalhesComprasElement = document.getElementById("detalhesCompras");

  // Itera sobre todas as compras e cria elementos html para cada uma
  compras.forEach((compra) => {
    const detalhesCompraHTML = `
      <div class="detalhes-compra">
        <p><strong>ID da Compra:</strong> ${compra.id}</p>
        <p><strong>Nome:</strong> ${compra.nome}</p>
        <p><strong>Telefone:</strong> ${compra.telefone}</p>
        <p><strong>Email:</strong> ${compra.email}</p>
        <p><strong>Produto:</strong> ${compra.produto}</p>
        <p><strong>Forma de Pagamento:</strong> ${compra.pagamento}</p>
        <p><strong>Endereço:</strong> ${compra.endereco}, ${compra.rua}, ${compra.cidade}, ${compra.estado}, ${compra.numero}, ${compra.cep}</p>
      </div>
    `;
    // Adiciona os detalhes da compra ao elemento
    detalhesComprasElement.innerHTML += detalhesCompraHTML;
  });
}
