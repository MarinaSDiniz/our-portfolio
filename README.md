# <NOME DO PROJETO>

> <FRASE DE EFEITO / TAGLINE DO PORTFÓLIO>

Projeto desenvolvido para a disciplina de <NOME DA DISCIPLINA> — <CURSO>, PUC <CAMPUS>, <SEMESTRE/ANO>.

---

## 1. Descrição do Projeto

<DESCREVA EM 2–4 PARÁGRAFOS O QUE É O SITE, PARA QUEM ELE É E QUAL PROBLEMA RESOLVE>

**Objetivo geral:** <OBJETIVO>

**Público-alvo:** <PÚBLICO>

**Objetivos específicos:**
- <OBJETIVO ESPECÍFICO 1>
- <OBJETIVO ESPECÍFICO 2>
- <OBJETIVO ESPECÍFICO 3>

---

## 2. Equipe

| Nome | Matrícula | Função | GitHub |
|------|-----------|--------|--------|
| <NOME> | <MATRÍCULA> | <FUNÇÃO> | [@<USER>](https://github.com/<USER>) |
| <NOME> | <MATRÍCULA> | <FUNÇÃO> | [@<USER>](https://github.com/<USER>) |

---

## 3. Wireframes (Figma — média fidelidade)

🔗 **Link do projeto no Figma:** <COLE AQUI O LINK PÚBLICO DO FIGMA>

| Página | Wireframe |
|--------|-----------|
| Home | ![Wireframe Home](docs/wireframes/home.png) |
| Sobre | ![Wireframe Sobre](docs/wireframes/sobre.png) |
| Projetos | ![Wireframe Projetos](docs/wireframes/projetos.png) |
| Contato | ![Wireframe Contato](docs/wireframes/contato.png) |

> Coloque as imagens exportadas do Figma em `docs/wireframes/`.

---

## 4. Protótipo do Front-end

🔗 **Deploy / preview:** <LINK DO DEPLOY (Vercel, Netlify, GitHub Pages...)>

| Tela | Captura |
|------|---------|
| Home | ![Protótipo Home](docs/prototipo/home.png) |
| Sobre | ![Protótipo Sobre](docs/prototipo/sobre.png) |
| Projetos | ![Protótipo Projetos](docs/prototipo/projetos.png) |
| Contato | ![Protótipo Contato](docs/prototipo/contato.png) |

> Coloque as capturas de tela em `docs/prototipo/`.

---

## 5. Tecnologias Previstas

| Categoria | Tecnologia |
|-----------|-----------|
| Linguagem | <HTML5 / CSS3 / JavaScript / TypeScript> |
| Framework | <React / Vue / Next.js / Vanilla> |
| Biblioteca de UI | <Mantine / Material-UI / Tailwind CSS / Bootstrap> |
| Roteamento | <React Router / Next App Router / links âncora> |
| Build / bundler | <Vite / Webpack / nenhum> |
| Controle de versão | Git + GitHub |
| Design | Figma |
| Hospedagem | <Vercel / Netlify / GitHub Pages> |

---

## 6. Estrutura Inicial do Site

### 6.1 Mapa de navegação

```
Home (/)
├── Sobre (/sobre)
├── Projetos (/projetos)
│   └── Detalhe do projeto (/projetos/:id)
├── <SEÇÃO EXTRA> (/<rota>)
└── Contato (/contato)
```

### 6.2 Layout principal

Todas as páginas compartilham o mesmo layout base:

```
┌─────────────────────────────────────────┐
│ CABEÇALHO (logo + menu de navegação)    │
├─────────────────────────────────────────┤
│                                         │
│ ÁREA DE CONTEÚDO (varia por página)     │
│                                         │
├─────────────────────────────────────────┤
│ RODAPÉ (contatos, redes sociais, ©)     │
└─────────────────────────────────────────┘
```

- **Cabeçalho:** <DESCREVA — logo, links, menu responsivo>
- **Área de conteúdo:** <DESCREVA — grid/containers usados>
- **Rodapé:** <DESCREVA — links, redes sociais, créditos>

### 6.3 Estrutura de pastas

```
our-portfolio/
├── docs/
│   ├── wireframes/        # imagens exportadas do Figma
│   └── prototipo/         # capturas do protótipo
├── src/
│   ├── assets/            # imagens, ícones, fontes
│   ├── components/        # componentes reutilizáveis
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Layout/
│   ├── pages/             # páginas do site
│   │   ├── Home/
│   │   ├── Sobre/
│   │   ├── Projetos/
│   │   └── Contato/
│   ├── styles/            # estilos globais e variáveis
│   └── main.<ext>         # ponto de entrada
├── .gitignore
├── package.json
└── README.md
```

---

## 7. Como Executar Localmente

```bash
# clonar o repositório
git clone https://github.com/<USUARIO>/our-portfolio.git
cd our-portfolio

# instalar dependências
<npm install>

# rodar em modo de desenvolvimento
<npm run dev>
```

Acesse: <http://localhost:PORTA>

---

## 8. Status de Entrega — Etapa 1

- [ ] Criação do repositório GitHub com README inicial
- [ ] Wireframes das páginas no Figma (média fidelidade)
- [ ] Protótipo inicial do front-end
- [ ] Implementação da navegação (estrutura de páginas e links entre seções)
- [ ] Implementação do layout principal (cabeçalho, rodapé e área de conteúdo)
- [ ] README com imagens dos protótipos, descrição, tecnologias e estrutura

---

## 9. Próximos Passos

- <PRÓXIMO PASSO 1>
- <PRÓXIMO PASSO 2>
- <PRÓXIMO PASSO 3>

---

## 10. Licença

<LICENÇA — ex.: MIT> — ver arquivo [LICENSE](LICENSE).
