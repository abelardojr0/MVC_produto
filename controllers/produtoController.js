const ProdutoModel = require('../models/produtoModel');

const getAllProdutos = async (req, res) => {
  try {
    const produtos = await ProdutoModel.getAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos', error });
  }
};

const getProdutoById = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await ProdutoModel.getById(id);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar produto' });
  }
};

const createProduto = async (req, res) => {
  const { nome, descricao, preco, quantidade } = req.body;
  try {
    await ProdutoModel.create(nome, descricao, preco, quantidade);
    res.status(201).json({ mensagem: 'Produto cadastrado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar produto' });
  }
};

const updateProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, quantidade } = req.body;
  try {
    await ProdutoModel.update(nome, descricao, preco, quantidade, id);
    res.status(200).json({ mensagem: 'Produto atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar produto', error });
  }
};

const deleteProduto = async (req, res) => {
  const { id } = req.params;
  try {
    await ProdutoModel.delete(id);
    res.status(200).json({ mensagem: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar produto' });
  }
};

module.exports = {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
};
