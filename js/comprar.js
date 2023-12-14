document.addEventListener("DOMContentLoaded", function () {
    let comprarForm = document.getElementById("comprarForm");
  
    comprarForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obter dados do formulário
      let nome = document.getElementById("nome").value.trim();
      let telefone = document.getElementById("telefone").value.trim();
      let email = document.getElementById("email").value.trim();
      let endereco = document.getElementById("endereco").value.trim();
      let rua = document.getElementById("rua").value.trim();
      let cidade = document.getElementById("cidade").value.trim();
      let estado = document.getElementById("estado").value.trim();
      let numero = document.getElementById("numero").value.trim();
      let cep = document.getElementById("cep").value.trim();
      let produto = document.getElementById("produto").value.trim();
      let pagamento = document.getElementById("pagamento").value.trim();
  
      // Criar objeto com os dados do comprador
      let comprador = {
        nome: nome,
        telefone: telefone,
        email: email,
        endereco: endereco,
        rua: rua,
        cidade: cidade,
        estado: estado,
        numero: numero,
        cep: cep,
        produto: produto,
        pagamento: pagamento,
      };
  
      // Enviar dados do comprador para o backend
      fetch("http://localhost:3000/compras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comprador),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erro no envio: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Dados do comprador enviados com sucesso:", data);
          alert("Compra Realizada com Sucesso!");
          // Redirecionar para a página inicial
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("Erro no envio dos dados do comprador:", error);
        });
    });
  });
  