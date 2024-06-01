const express = require("express");
const router  = express.Router();
const msgSms  = require("../msgSms/twilio");

router.post('/enviar-pedido-whatsapp', async (req, res) => {
    const { name, message, home, address, cep, total, cart} = req.body;

    const cartItems = cart.map((item) => `${item.name} - Quantidade: ${item.quantify}, - Preço uniário: ${item.price.toFixed(2)}, Preço total: ${(item.price * item.quantify).toFixed(2)}`).join("\n");

    const mensagem = `
        Novo pedido do(A): *${name}*,\n 

    Cep:${cep},\n Casa: *${home}*,\n 

    Endereço: *${address}*,\n 

    ${cartItems},\n 

    Menssagem do cliente: *${message}*,\n

    Valor total: R$${total.toFixed(2)}`;
        
        try {
            const messageSent  = await msgSms(mensagem);

            if(messageSent){
                res.status(200).json({menssagem: "Pedido enviado com sucesso!"});
            }

        } catch (error) {
            console.error('Erro no servidor:', error);
            return res.status(500).json({ mensagem: "Erro ao enviar pedido" });
        }
});

module.exports = router