document.addEventListener("DOMContentLoaded", function () {
  // Simular uma solicitação para obter todas as compras
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
  // Selecione o elemento onde os detalhes de todas as compras serão exibidos
  const detalhesComprasElement = document.getElementById("detalhesCompras");

  // Iterar sobre todas as compras e criar elementos HTML para cada uma
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

    // Adicione os detalhes da compra ao elemento
    detalhesComprasElement.innerHTML += detalhesCompraHTML;
  });
}
