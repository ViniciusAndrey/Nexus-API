# Nexus-API

## **1- Inicializando o projeto**

```bash
yarn init -y
```

### **Executando o comando no terminal:**

Este comando cria um arquivo `package.json`, que gerencia as dependências e configurações do projeto.

---

## **2- Configurando as dependências**

Agora, instale o TypeScript e o `ts-node-dev` para desenvolvimento:

```bash
yarn add typescript ts-node-dev -D
```

- `typescript`: Adiciona suporte ao TypeScript.
- `ts-node-dev`: Executa arquivos TypeScript sem precisar compilar manualmente.

O `package.json` gerado terá o seguinte conteúdo:

```json
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.7.3"
  },
  "dependencies": {
    "express": "^4.21.2"
  }
}
```

### Explicação dos scripts:

- `"dev": "ts-node-dev --respawn --transpile-only src/server.ts"`
    - `ts-node-dev`: Permite rodar código TypeScript sem compilação prévia.
    - `--respawn`: Reinicia automaticamente o servidor ao detectar mudanças no código.
    - `--transpile-only`: Melhora a performance ignorando a verificação de tipos.

---

## **3- Criando o servidor Express**

Agora, crie o arquivo **`server.ts`** dentro da pasta `src`:

```typescript
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server rodando na porta 3000');
});
```

### Explicação do código:

- `import express from 'express';` → Importa o framework Express.
- `const app = express();` → Inicializa a aplicação.
- `app.use(express.json());` → Habilita o JSON como formato padrão das requisições.
- `app.get('/', (req, res) => {...})` → Define uma rota GET que retorna "Hello World".
- `app.listen(3000, () => {...})` → Inicia o servidor na porta **3000**.

---

## **4- Rodando o servidor**

No terminal:

```bash
yarn dev
```

Se tudo estiver certo, a saída será:

```bash
Server rodando na porta 3000
```

