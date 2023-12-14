const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let listaProdutos = [
    {
        idProduto: 1,
        nome: "Pomada de CBD",
        descricao: "A pomada à base de canabidiol é um produto que se mostra eficaz no tratamento e alívio de sintomas de doenças variadas.",
        img: "./img/card1.jpg",
    },
    {
        idProduto: 2,
        nome: "Óleo de CBD 3%",
        descricao: "Ajuda a aliviar as doenças do corpo, mas também os estados emocionais. Usado na massagem, alivia as dores nas articulações, músculos, mas também os problemas de pele.",
        img: "./img/card2.jpg",
    },
    {
        idProduto: 3,
        nome: "Óleo de CBD orgânico 5% ",
        descricao: "Para produzirmos o óleo de CBD, o próprio CBD é extraído do cânhamo, é purificado e de seguida destilado, antes de ser adicionado ao óleo de transporte, neste caso óleo MCT orgânico.",
        img: "./img/card3.jpg",
    },
];

app.get('/produtos', (req, res) => {
    res.json(listaProdutos);
});

app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    listaProdutos.push(novoProduto);
    res.json({ message: 'Produto adicionado com sucesso!', produto: novoProduto });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
