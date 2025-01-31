const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/desconto', (req, res)=>{
    const {salario} = req.body;
    let desconto = 0;

    if (salario <= 1212) {
        desconto = salario - (salario * 0.075);
        req.json({desconto});
    } else if (salario >= 1212 || salario <= 2427.35) {
        desconto = salario - (salario * 0.09);
        req.json({desconto});
    } else if (salario >= 2427.35 || salario <= 3641.03) {
        desconto = salario - (salario * 0.12);
        req.json({desconto});
    } else {
        desconto = salario - (salario * 0.14);
        req.json({desconto});
    }

})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})