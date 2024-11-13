const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const verificaApiKey = require('./middleware/verificaApiKey'); // Se tiver o middleware de API Key
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(verificaApiKey);

app.use('/', produtoRoutes);

app.listen(PORT, () => {
  console.log(`API ESTÁ NO AR na porta ${PORT}`);
});
