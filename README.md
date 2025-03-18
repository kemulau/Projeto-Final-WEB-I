# 📌 Refatoração de Código - Aula de Testes de Software

📅 **Data:** 18 de março de 2025  

## 🎯 Objetivo

Refatorar o código para melhorar **modularidade, reutilização e manutenção**.

---

## 🔄 Alterações

### 🛑 Antes da Refatoração
- Código **monolítico**, com funções grandes e responsabilidades misturadas.
- `criarCards` gerava os cards e adicionava eventos diretamente, tornando difícil a reutilização.
- Formulário de compra capturava os dados e enviava a requisição dentro do mesmo bloco de código.
- A listagem de compras manipulava o DOM e fazia a requisição dentro da mesma função.
- **Dificuldade para testar** cada parte isoladamente.

### ✅ Depois da Refatoração
- Código **modular**, separado em funções específicas:
  - `criarCard(produto)`: Cria um card para cada produto.
  - `adicionarEventosCard(card, produtoID)`: Adiciona eventos aos botões de compra e exclusão.
  - `renderizarCards()`: Renderiza os produtos na tela, evitando duplicação.
  - `obterDadosComprador()`: Captura os dados do formulário.
  - `enviarDadosComprador(comprador)`: Envia os dados para a API.
  - `carregarCompras()`: Obtém a lista de compras da API.
  - `exibirDetalhesCompras(compras)`: Exibe as compras no HTML.
  - `criarDetalhesCompraHTML(compra)`: Formata os detalhes de cada compra.

- **Melhor legibilidade** e separação de responsabilidades.
- **Facilidade de manutenção** e testes.