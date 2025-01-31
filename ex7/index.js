const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/reajustesalarial', (req, res) => {
    const { salarioAtual } = req.body;
    let aumento;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        aumento = salarioAtual * 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        aumento = salarioAtual * 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        aumento = salarioAtual * 0.09;
    } else if (salarioAtual >= 3000) {
        aumento = salarioAtual * 0.06;
    } else {
        aumento = 0; 
    }

    const novoSalario = salarioAtual + aumento;
    res.json({ novoSalario });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})