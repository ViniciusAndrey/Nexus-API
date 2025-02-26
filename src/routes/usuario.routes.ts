import express from 'express';
import axios from 'axios';

const router = express.Router();
const API_URL = 'https://ourchat-ii0z.onrender.com/people'; // API externa

// 🔹 Rota para buscar usuários por fornecedor
router.get('/fornecedor=:fornecedor', async (req, res) => {
  try {
    const { fornecedor } = req.params;
    const response = await axios.get(`${API_URL}?fornecedor=${fornecedor}`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados na API externa' });
  }
});

export default router;
