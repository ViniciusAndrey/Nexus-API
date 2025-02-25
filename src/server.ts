import express from 'express';
import { connectDB } from './database';
import usuarioRoutes from './routes/usuario.routes';
import peopleRoutes from './routes/people.routes';

const app = express();

// Conectar ao MongoDB
connectDB();

app.use(express.json());

// Rota principal - Hello World
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rotas da API
app.use('/usuarios', usuarioRoutes);
app.use('/pessoas', peopleRoutes);

app.listen(3000, () => {
  console.log('✅ Servidor rodando na porta 3000');
});
