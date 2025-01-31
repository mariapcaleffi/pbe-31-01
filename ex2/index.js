const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;

    if (a === b && b === c) {
        res.json({ tipo: "EQUILÁTERO" });
    } else if (a !== b && b !== c && a !== c) {
        res.json({ tipo: "ESCALENO" });
    } else {
        res.json({ tipo: "ISÓSCELES" });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})