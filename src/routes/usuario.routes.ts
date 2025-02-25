import { Router } from 'express';
import { Usuario } from '../models/Usuario';
import mongoose from 'mongoose';

const router = Router();

// 🔹 Criar um novo usuário (POST)
router.post('/', async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoUsuario = await Usuario.create({ nome, email });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
});

// 🔹 Buscar todos os usuários (GET)
router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

// 🔹 Buscar um usuário por ID (GET)
router.get('/:id', async (req: any, res: any) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'ID inválido' });
  }
});


// 🔹 Atualizar um usuário por ID (PUT)
router.put('/:id', async (req: any, res: any) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    if (!usuarioAtualizado) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// 🔹 Deletar um usuário por ID (DELETE)
router.delete('/:id', async (req: any, res: any) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const usuarioRemovido = await Usuario.findByIdAndDelete(id);
    if (!usuarioRemovido) return res.status(404).json({ error: 'Usuário não encontrado' });
    return res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});

export default router;
