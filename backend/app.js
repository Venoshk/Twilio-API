const express = require('express');
const app     = express();
const cors    = require("cors");
const router  = require("./src/router");


app.use(express.json());
app.use(cors());
app.use(router);


// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
