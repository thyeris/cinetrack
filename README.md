# 🎬 CineTrack

Projeto de estudo feito com **React** e **Vite** que mostra uma lista de filmes populares usando a API do [TMDB](https://www.themoviedb.org/).

## Sobre o projeto

Quando a página abre, o app busca os filmes mais populares e mostra cada um em um card com pôster, título, ano e nota.

### O que ele faz

- Lista os filmes populares em um grid de cards
- Mostra "Sem avaliação" quando o filme não tem nota
- Exibe um skeleton (cards de carregamento) enquanto os dados chegam
- Mostra uma mensagem de erro amigável se a requisição falhar, com o botão **"Tentar novamente"**
- Mostra uma mensagem quando nenhum filme é encontrado

### Tecnologias

- React
- Vite
- Axios
- CSS Modules
- GitHub Actions + GitHub Pages

## Estrutura das pastas

```
src/
├── components/   # MovieCard, MovieGrid, skeletons e EmptyState
├── hooks/        # useMovies (controla loading, erro e retry)
├── pages/        # Home
├── services/     # chamada da API (axios) e tratamento de erros
└── utils/        # remapKeys (organiza os dados que vêm da API)
```

## Como rodar o projeto

**Pré-requisitos:** Node.js 18 ou superior e um token da API do TMDB.

1. Crie uma conta no [TMDB](https://www.themoviedb.org/) e pegue o **Token de Leitura da API** em *Configurações → API*.

2. Clone o repositório e entre na pasta:

```bash
git clone https://github.com/thyeris/cinetrack.git
cd cinetrack
```

3. Instale as dependências:

```bash
npm install
```

4. Copie o arquivo de exemplo e coloque o seu token:

```bash
cp .env.example .env
```

```env
VITE_TMDB_TOKEN=seu_token_aqui
```

5. Rode o projeto:

```bash
npm run dev
```

Depois é só abrir `http://localhost:5173/cinetrack/` no navegador.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | roda o projeto em desenvolvimento |
| `npm run build` | gera a versão de produção |
| `npm run preview` | testa a versão de produção localmente |
| `npm run lint` | verifica o código com o ESLint |

## Deploy

O deploy é automático: a cada push na branch `main`, o GitHub Actions faz o build e publica no GitHub Pages. Para funcionar, é preciso criar o secret `VITE_TMDB_TOKEN` no repositório (*Settings → Secrets and variables → Actions*).

---

Dados e imagens fornecidos pelo [TMDB](https://www.themoviedb.org/).
