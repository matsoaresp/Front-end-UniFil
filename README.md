# Projeto AppStore

Projeto criado com **Vite + React + TypeScript** com o objetivo de desenvolver um website para a disciplina de Desenvolvimento Front-end.


# Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS


# Organização do código

```bash
src/
```

Pasta principal da aplicação, onde fica toda a lógica e estrutura do projeto.

---

```bash
src/components
```

Contém os componentes reutilizáveis da aplicação, como:

- Card
- Container
- Carrossel
- Navbar
- Buttons

Esses componentes podem ser utilizados em diferentes partes do sistema para evitar repetição de código.

---

```bash
src/assets
```

Pasta responsável por armazenar os arquivos estáticos do projeto, como:

- Imagens
- Ícones
- Logos
- SVGs

---

```bash
src/pages
```

Contém as páginas da aplicação.

Exemplo:

- Home
- Sobre
- Contato

Cada página representa uma rota ou tela do sistema.

---

```bash
src/styles
```

Responsável pelos arquivos de estilização separados por módulos ou páginas.

Exemplo:

- home.css
- navbar.css
- card.css

---

```bash
src/index.css
```

Arquivo de estilização global da aplicação.

Utilizado para:

- Reset de CSS
- Configurações globais
- Fontes
- Variáveis
- Estilos padrão do sistema

---

```bash
src/main.tsx
```

Ponto inicial da aplicação React.

Responsável por renderizar o componente principal (`App.tsx`) na aplicação.

---

```bash
src/App.tsx
```

Componente principal da aplicação.

Nele normalmente ficam:

- Estrutura geral
- Rotas
- Componentes globais
- Layout principal

---

# Como executar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

# Objetivo do projeto

O objetivo do projeto é praticar conceitos de:

- Componentização
- Reutilização de código
- Estruturação de projetos React
- Estilização
- Organização de pastas
- Desenvolvimento Front-end com TypeScript
