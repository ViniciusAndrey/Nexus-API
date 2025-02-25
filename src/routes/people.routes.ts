import { Router } from 'express';
import {criarPessoa, deletarPessoa} from '../services/apiService';

const router = Router();


router.post('/', async (req: any, res: any) => {
  try {
    await criarPessoa(req.body);
    res.status(201).json({ message: 'Pessoa criada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
});

router.delete('/:id', async (req: any, res: any) => {
  try {
    const id = req.params.id;
    await deletarPessoa(id);
    res.json({ message: 'Pessoa deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar pessoa' });
    }
})

export default router;
