
# 🚀 Desafio React.js - HTTP e Performance (Aplicação Github Blog)

Este projeto é um Front-end desenvolvido como parte do [desafio](https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1) do módulo de HTTP e Performance de React.js da [Rocketseat](https://www.rocketseat.com.br/).  
A aplicação (Github Blog) representa uma um blog de posts (issues) do github totalmente responsivo. Além disso foi realizado o deploy da aplicação na vercel e é possível pré-visualizar [aqui](https://github-blog-three-tau.vercel.app/).

---

## 📋 Funcionalidades

- 📄 Listagem de posts (issues criadas no repositório do projeto).
- 📄 Detalhes do post como autor, quantidade de comentários e uma preview em markdown.
- 🔎 Filtrar posts.

---

## 🔗 Rotas da Aplicação

### 🏠 `/`
Página inicial do blog com com listagem de posts em formato card com uma barra de busca. Além da apresentação do perfil principal do usuário do github proprietário do repositório host dos posts (issues).

### 📃 `/posts/:id`
Detalhes de um post selecionado na tela inicial. Apresenta titulo, conteúdo, quantidade de comentários e informações do autor.

---

## ▶️ Executando o projeto

```bash
# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

A Aplicação estará estará disponível em:  
[http://localhost:5173](http://localhost:5173)

---

## 🛠️ Tecnologias utilizadas

- React.js
- React Router
- Typescript
- Tailwind CSS
- Tanstack React Query
- class-variance-authority
- axios
- React Markdown
- React Syntax Hightlighter
---

Desenvolvido com 💜 para o desafio da [Rocketseat](https://www.rocketseat.com.br/)