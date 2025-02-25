import express from 'express';
import { connectDB } from './database';
import usuarioRoutes from './routes/usuario.routes';

const app = express();

// Conectar ao MongoDB
connectDB();

app.use(express.json());

// Rota principal - Hello World
app.get('/', (req, res) => {
  res.send('NEXUS API!!');
});

// Rotas da API
app.use('/usuarios', usuarioRoutes);

app.listen(3000, () => {
  console.log('✅ Servidor rodando na porta 3000');
});
