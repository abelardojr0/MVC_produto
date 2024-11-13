const crypto = require('crypto');

// Função para gerar uma chave de API aleatória
const gerarApiKey = () => {
  return crypto.randomBytes(16).toString('hex');
};

console.log(gerarApiKey());
