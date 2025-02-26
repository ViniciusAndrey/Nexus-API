import { Router } from 'express';
import axios from 'axios';
import { Usuario } from '../models/Usuario'; // Importando o modelo do MongoDB

const router = Router();
const API_URL = 'https://ourchat-ii0z.onrender.com/people'; // API externa

// 🔹 Rota para buscar usuários (interno ou externo)
router.get('/fornecedor=:fornecedor', async (req: any, res: any) => {
  try {
    const { fornecedor } = req.params; // Obtém o fornecedor da URL

    if (fornecedor.toLowerCase() === 'vini') {
      // ✅ Buscar usuários do banco de dados
      const usuarios = await Usuario.find(); // coleção se chama "usuarios"
      return res.json(usuarios);
    } else {
      // ✅ Buscar usuários da API externa
      const response = await axios.get(`${API_URL}?fornecedor=${fornecedor}`);
      return res.json(response.data);
    }
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// 🔹 Rota padrão para listar todos os usuários locais (sem fornecedor)
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao buscar usuários locais:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários locais' });
  }
});

export default router;
