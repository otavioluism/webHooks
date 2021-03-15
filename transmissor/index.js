const express = require('express');
var WebHooks = require('node-webhooks')

const app = express();

app.post('/', (request, response) => { 
    const hooks = registerHooks();
    hooks.trigger('callback_hook', { 
        price : 150.47, 
        title: "Camisa Gola Polo",
        description: "Camisa muito confortável e com novo visual para o verão"
    });
    return response.json({msg: "Compra enviada"})
})

const registerHooks = () => {
    return new WebHooks({
        db: {
            'callback_hook': ['http://localhost:3335/webhook-client']
        }
    });
}

app.listen(3100, () => {
    console.log('Transportador running in port 3100')
})