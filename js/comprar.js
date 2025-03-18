document.addEventListener("DOMContentLoaded", () => {
    const comprarForm = document.getElementById("comprarForm");
    
    comprarForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const comprador = obterDadosComprador();
        await enviarDadosComprador(comprador);
    });
});

const obterDadosComprador = () => {
    return {
        nome: document.getElementById("nome").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        email: document.getElementById("email").value.trim(),
        endereco: document.getElementById("endereco").value.trim(),
        rua: document.getElementById("rua").value.trim(),
        cidade: document.getElementById("cidade").value.trim(),
        estado: document.getElementById("estado").value.trim(),
        numero: document.getElementById("numero").value.trim(),
        cep: document.getElementById("cep").value.trim(),
        produto: document.getElementById("produto").value.trim(),
        pagamento: document.getElementById("pagamento").value.trim(),
    };
};

const enviarDadosComprador = async (comprador) => {
    try {
        const response = await fetch("http://localhost:3000/compras", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comprador),
        });

        if (!response.ok) {
            throw new Error(`Erro no envio: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados do comprador enviados com sucesso:", data);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro no envio dos dados do comprador:", error);
    }
};