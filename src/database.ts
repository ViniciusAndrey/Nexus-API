import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente
dotenv.config();

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('🔴 ERRO: MONGO_URI não foi carregado corretamente');
  process.exit(1);
}

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('🟢 Conectado ao MongoDB');
  } catch (error) {
    console.error('🔴 Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};
