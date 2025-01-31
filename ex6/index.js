const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/maioremenor', (req, res) => {
    const { num1, num2 } = req.body;
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);
    res.json({ maior, menor });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})