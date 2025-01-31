const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/maiornum', (req, res) => {
    const { numeros } = req.body; // Espera um array de 6 números
    const maiorNumero = Math.max(...numeros);
    res.json({ maiorNumero });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})