const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/media', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';

    if (media >= 6) {
        situacao = "aprovado";
    } else if (media >= 4) {
        situacao = "recuperação";
    } else {
        situacao = "reprovado";
    }

    res.json({ media, situacao });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})