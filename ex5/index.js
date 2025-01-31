const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/ordenar', (req, res) => {
    const { numeros } = req.body; // Espera um array de 5 números
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    res.json({ numerosOrdenados });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})