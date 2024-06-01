require('dotenv').config();

const twilio = require('twilio');

const accountSid = process.env.ACCOUNTSID;
const authToken  = process.env.AUTHTOKEN;
const myNumber   = process.env.MY_NUMBER
const client = twilio(accountSid, authToken);

const msgSms = async (body) => {

    try {
        const message = await client.messages.create({
            from: 'whatsapp:+14155238886', // Número do Twilio (whatsapp)
            to: myNumber, // Número do WhatsApp da empresa
            body
        });
        console.log('Mensagem enviada com sucesso. SID:', message.sid);
        return true;
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        return false;
    }
};


module.exports = msgSms;