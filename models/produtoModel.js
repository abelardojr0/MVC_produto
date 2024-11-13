const pool = require('../db');

const ProdutoModel = {
  getAll: async () => {
    const consulta = 'SELECT * FROM produtos';
    const [rows] = await pool.query(consulta);
    return rows;
  },
  getById: async (id) => {
    const consulta = 'SELECT * FROM produtos WHERE id = ?';
    const [rows] = await pool.query(consulta, [id]);
    return rows[0];
  },
  create: async (nome, descricao, preco, quantidade) => {
    const consulta =
      'INSERT INTO produtos (nome, descricao, preco, quantidade) VALUES (?, ?, ?, ?)';
    await pool.query(consulta, [nome, descricao, preco, quantidade]);
  },
  update: async (nome, descricao, preco, quantidade, id) => {
    const consulta =
      'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade = ? WHERE id = ?';
    await pool.query(consulta, [nome, descricao, preco, quantidade, id]);
  },
  delete: async (id) => {
    const consulta = 'DELETE FROM produtos WHERE id = ?';
    await pool.query(consulta, [id]);
  },
};

module.exports = ProdutoModel;
