<p align="center">
  <img src="assets/PrismaLogo.png" alt="PrismaCursos Logo" width="180">
</p>

<h1 align="center"><b>🌈 Prisma Cursos</b></h1>

## 📁 Estrutura

```
PrismaCursos/
├── index.html          ← Página principal (abra no navegador)
├── css/
│   ├── styles.css      ← Estilos (edite aqui)
│   └── scss/           ← Opcional: para quem quiser usar SCSS
│       ├── styles.scss
│       └── compilar-scss.sh
├── js/
│   └── main.js         ← JavaScript
├── assets/             ← Imagens e recursos
└── .gitignore
```

## 🚀 Como Rodar

Abra o `index.html` no navegador. Pronto.

> **VS Code?** Instale a extensão **Live Server** e clique em **Go Live**.

---

## 🔀 Git — Comandos Essenciais

### Primeira vez? Configure seu nome

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
```

### Clonar o repositório

```bash
git clone https://github.com/EduLoboM/Orcestra-2026.1-G04-PrismaCursos.git
cd Orcestra-2026.1-G04-PrismaCursos
```

### Criar sua branch e trabalhar nela

```bash
git checkout -b feature/minha-tarefa    # cria e já entra na branch
```

**Nomes de branch:**

| Prefixo | Uso | Exemplo |
|---------|-----|---------|
| `feature/` | Funcionalidade nova | `feature/pagina-cursos` |
| `fix/` | Correção | `fix/navbar-mobile` |
| `style/` | Visual | `style/cores-footer` |

### Salvar seu trabalho (commit + push)

```bash
git add .
git commit -m "feat: adiciona cards de cursos"
git push origin feature/minha-tarefa
```

### Tipos de commit

| Tipo | Uso | Exemplo |
|------|-----|---------|
| `feat` | Funcionalidade | `feat: cria seção de cursos` |
| `fix` | Correção | `fix: link quebrado no menu` |
| `style` | Visual | `style: ajusta cores do footer` |
| `docs` | Documentação | `docs: atualiza README` |
| `refactor` | Reorganização | `refactor: separa estilos do hero` |
| `chore` | Manutenção | `chore: atualiza gitignore` |

### Atualizar sua branch com a main

```bash
git checkout main
git pull origin main
git checkout feature/minha-tarefa
git merge main
```

### Trocar de branch

```bash
git checkout nome-da-branch
```

### Ver suas branches

```bash
git branch
```

---

## 🔃 Fluxo de Trabalho

```mermaid
graph TD
    A["🔽 git clone do repositório"] --> B["🌿 git checkout -b feature/..."]
    B --> C["✏️ Editar arquivos"]
    C --> D["💾 git add . + git commit"]
    D --> E["🚀 git push origin feature/..."]
    E --> F{"Como integrar?"}
    F -->|"Opção 1"| G["🔃 Abrir Pull Request no GitHub"]
    F -->|"Opção 2"| H["💬 Avisar o responsável pelos merges"]
    G --> I["✅ Merge na main"]
    H --> I
```

1. Faça `push` da sua branch
2. Escolha uma das opções:
   - **Opção 1 — Pull Request:** Vá no GitHub → **Compare & pull request**, descreva o que fez e peça revisão
   - **Opção 2 — Aviso direto:** Avise no grupo quem está responsável pelos merges que a sua branch está pronta
3. Aguarde o merge na `main`

> ⚠️ **Nunca dê commit direto na `main`!** Sempre use branches.

---

## ✅ Dicas Rápidas

- Commits **pequenos e frequentes** > um commit gigante
- Use tags semânticas no HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- Use as variáveis CSS do `:root` para cores e espaçamentos
- Use `const` e `let` no JS, **nunca** `var`
- **Comunique no grupo** o que está fazendo pra não duplicar trabalho

---

## 🎨 SCSS (opcional)

Se quiser usar SCSS ao invés de CSS puro, edite `css/scss/styles.scss` e compile:

```bash
# Instalar o compilador (uma vez só)
sudo apt install sass          # Linux
brew install sass/sass/sass    # Mac
choco install sass             # Windows

# Compilar
cd css/scss
./compilar-scss.sh             # compila uma vez
./compilar-scss.sh --watch     # recompila automaticamente
```

> Se não quiser usar SCSS, ignore a pasta `css/scss/` e edite o `css/styles.css` direto.

---

## 👥 Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/EduLoboM">
        <img src="https://github.com/EduLoboM.png" width="100px;" alt="Eduardo Lobo Moreira"/><br />
        <sub><b>Eduardo Lobo Moreira</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JuliaTrevizolo">
        <img src="https://github.com/JuliaTrevizolo.png" width="100px;" alt="Júlia Trevizolo"/><br />
        <sub><b>Júlia Trevizolo</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dev-LucasDpaula">
        <img src="https://github.com/dev-LucasDpaula.png" width="100px;" alt="Lucas Oliveira de Paula"/><br />
        <sub><b>Lucas Oliveira de Paula</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/marianeb08">
        <img src="https://github.com/marianeb08.png" width="100px;" alt="Mariane"/><br />
        <sub><b>Mariane</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pedrossantoss">
        <img src="https://github.com/pedrossantoss.png" width="100px;" alt="Pedro dos Santos"/><br />
        <sub><b>Pedro dos Santos</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/VitorRoss1">
        <img src="https://github.com/VitorRoss1.png" width="100px;" alt="Vitor Rossi"/><br />
        <sub><b>Vitor Rossi</b></sub>
      </a>
    </td>
  </tr>
</table>

---

### 🏷️ Sistema de Desconto Progressivo (Gamificação 2)
Para incentivar a exploração da página e aumentar o engajamento do usuário, foi implementada uma mecânica de desconto dinâmico via JavaScript:
* **Gatilho de Ativação:** O usuário ganha **+5% de desconto acumulado** ao clicar em seções-chave de engajamento na navegação:
  * `Cursos`
  * `Quem Somos`
  * `Contato`
* **Comportamento Visual:** A cada clique, o estado global da aplicação é atualizado, disparando uma transição suave no CSS que altera a cor de fundo do selo (triângulo de oferta) e atualiza o texto da porcentagem em tempo real.

---

### 🧪 Validação de Formulário 
Garante a integridade e a qualidade dos dados coletados antes do envio do formulário de cadastro, aplicando regras rígidas de validação em JavaScript:

| Campo | Regra de Validação | Objetivo do Critério |
| :--- | :--- | :--- |
| **E-mail** | Presença obrigatória dos caracteres `@` e `.` | Evita formatos de texto inválidos e garante a estrutura padrão de comunicação. |
| **Celular** | String estritamente numérica com **10 ou 11 dígitos** | Valida o padrão nacional de telefonia (com DDD), aceitando tanto números fixos quanto celulares com o nono dígito. |
| **Curso** | Verificação de correspondência (*Match*) em uma lista predefinida | Impede a inserção manual de dados corrompidos ou cursos inexistentes na plataforma, validando contra a array oficial de ofertas. |

> 💡 **Nota de UX:** Caso algum campo não cumpra os critérios acima, o envio do formulário é interceptado via `preventDefault()`, e o sistema exibe alertas visuais intuitivos para que o usuário corrija as informações sem perder o progresso.
