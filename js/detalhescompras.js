document.addEventListener("DOMContentLoaded", carregarCompras);

async function carregarCompras() {
    try {
        const response = await fetch("http://localhost:3000/compras");
        if (!response.ok) {
            throw new Error(`Erro ao obter detalhes de todas as compras: ${response.status}`);
        }
        const compras = await response.json();
        exibirDetalhesCompras(compras);
    } catch (error) {
        console.error("Erro ao obter detalhes de todas as compras:", error);
    }
}

function exibirDetalhesCompras(compras) {
    const detalhesComprasElement = document.getElementById("detalhesCompras");
    detalhesComprasElement.innerHTML = ""; // Limpa antes de adicionar novos elementos
    
    compras.forEach((compra) => {
        const detalhesCompraHTML = criarDetalhesCompraHTML(compra);
        detalhesComprasElement.innerHTML += detalhesCompraHTML;
    });
}

function criarDetalhesCompraHTML(compra) {
    return `
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
}