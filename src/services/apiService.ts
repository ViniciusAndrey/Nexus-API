import axios from 'axios';

const API_URL = 'https://ourchat-ii0z.onrender.com/people';

// 🔹 Criar uma nova pessoa (POST)
export const criarPessoa = async (dados: object) => {
  try {
    const response = await axios.post(API_URL, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
};

export const deletarPessoa = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}
