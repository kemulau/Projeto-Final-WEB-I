let form = document.querySelector("form");

const validarDados = (
  nome,
  telefone,
  email,
  endereco,
  cidade,
  estado,
  cep,
  numero,
  opcProduto,
  opcPagamento,
  

) => {
  let control = true;

  if (nome.value.trim() == "") {
    nome.classList.add("change-background");
    control = false;
  }

  if (email.value.trim() == "") {
    email.classList.add("change-background");
    control = false;
  }

  if (telefone.value.trim() == "") {
    telefone.classList.add("change-background");
    control = false;
  }
  if (endereco.value.trim() == "") {
    rua.classList.add("change-background");
    control = false;
    }
  if (cidade.value.trim() == "") {
    cidade.classList.add("change-background");
    control = false;
    }
  if (estado.value.trim() == "") {
    estado.classList.add("change-background");
    control = false;
    }
  if (cep.value.trim() == "") {
    cep.classList.add("change-background");
    control = false;
    }
  if (numero.value.trim() == "") {
    numero.classList.add("change-background");
    control = false;
  }
  if (opcProduto.value.trim() == "") {
    opcProduto.classList.add("change-background");
    control = false;
 }
 if (opcPagamento.value.trim() == "") {
    opcPagamento.classList.add("change-background");
    control = false;
  
    
  if (control) {
    alert("Compra Realizada com Sucesso!");
    window.location.href = "index.html";
    }
        
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let endereco = document.querySelector("#endereco");
  let opcEndereco= endereco.options[endereco.selectedIndex].value;
  let cidade = document.querySelector("#cidade");
  let estado = document.querySelector("#estado");
  let cep = document.querySelector("#cep");
  let numero = document.querySelector("#numero");
  let opcProduto = produto.options[produto.selectedIndex].value;
  let opcPagamento = pagamento.options[pagamento.selectedIndex].value;
  
  if (
    validarDados(
    nome,
    telefone,
    email,
    endereco,
    cidade,
    estado,
    cep,
    numero,
    opcProduto,
    opcPagamento,
    
      
    )
  ) {
    let adotante = {
      nome: nome.value.trim(),
      telefone: telefone.value.trim(),
      email: email.value.trim(),
      residencia: residencia.value.trim(),
      rua: rua.value.trim(),
      cidade: cidade.value.trim(),
      estado: estado.value.trim(),
      cep: cep.value.trim(),
      numero: numero.value.trim(),
      comentarios: comentarios.value.trim(),
      idProduto: sessionStorage.getItem("produtoSelecionado"),
    };

    let adotanteJSON = JSON.stringify(adotante);
    console.log(adotanteJSON);

    let adotanteNew = JSON.parse(adotanteJSON);
    console.log(adotanteNew);
  }
});}
