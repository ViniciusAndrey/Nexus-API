import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

export const Usuario = mongoose.model('Usuario', UsuarioSchema);