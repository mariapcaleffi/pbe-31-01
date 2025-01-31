const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/salariofamilia', (req, res) => {
    const { salario, numFilhos } = req.body;

    if (salario < 2000) {
        const salarioFamilia = numFilhos * 45;
        const salarioFinal = salario + salarioFamilia;
        res.json({ salarioFinal: salarioFinal })
    } else {
        res.json({ salarioFinal: salario })
    }
})