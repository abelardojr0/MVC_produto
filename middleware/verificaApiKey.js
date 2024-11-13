const verificaApiKey = (req, res, next) => {
  const apiKey = req.query.api_key;

  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({ mensagem: 'Acesso negado: chave de API inválida' });
  }
};

module.exports = verificaApiKey;
