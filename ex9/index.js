const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/desconto', (req, res) => {
    const { tipoPeca, precoOriginal } = req.body;
    let desconto;
    
    switch (tipoPeca) {
        case 'camisa':
            desconto = precoOriginal * 0.20; 
            break;
        case 'bermuda':
            desconto = precoOriginal * 0.10; 
            break;
        case 'calça':
            desconto = precoOriginal * 0.15; 
            break;
        default:
            desconto = 0; 
    }

    const precoFinal = precoOriginal - desconto;
    res.json({ precoFinal });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})