import express from 'express';

const app = express();
app.use(express.json())

app.post('/webhook-client', (request, response) => { 
    console.log("NOVO PEDIDO")
    const data = request.body
    console.log(data)
    return response.json(data)
})

app.listen(3335, () => { 
    console.log("Server receptor running in port 3335")
});

