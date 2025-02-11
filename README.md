![image](https://github.com/user-attachments/assets/09250b18-b685-42b8-9229-dc5eca5b374f)
Seja bem vindo ao Dicionário do Programador!

📂 Estrutura do Projeto
Este projeto está organizado em três fases principais: Pesquisa , Design e Implementação . Cada fase possui suas próprias branches e sub-branches para facilitar o desenvolvimento colaborativo e garantir um fluxo de trabalho claro.

```/projeto
│
├── /assets
│   ├── /css
│   │   ├── styles.css          # Estilos globais
│   │   ├── theme-styles.css    # Estilos específicos para a tela de tema
│   │   └── menu-styles.css     # Estilos específicos para a tela de menu
│   │
│   ├── /js
│   │   ├── main.js             # Scripts globais
│   │   ├── menu.js             # Scripts específicos para a tela de menu
│   │   └── theme.js            # Scripts específicos para a tela de tema
│   │
│   ├── /images
│   │   ├── logo.png            # Imagens globais
│   │   ├── background.jpg      # Imagens de fundo
│   │   └── /temas              # Imagens específicas para cada tema
│   │       ├── tema1.jpg
│   │       ├── tema2.jpg
│   │       └── ...
│   │
│   └── /fonts                  # Fontes customizadas (se necessário)
│       ├── font1.woff
│       └── font2.woff
│
├── /pages
│   ├── index.html              # Tela principal
│   ├── menu.html               # Tela de menu com os 12 temas
│   └── /temas                  # Telas de cada tema
│       ├── tema1.html
│       ├── tema2.html
│       └── ...
│
└── README.md                   # Documentação do projeto
```

🔧 Fluxo de Trabalho
Branch Principal (main):
A branch principal onde todas as alterações finalizadas serão mescladas.
Regra: Ninguém deve fazer commits diretamente na main. Todas as alterações devem passar por pull requests após revisão.
Branches de Fase:
Cada fase do projeto (Pesquisa, Design e Implementação) tem sua própria branch principal:

### pesquisa
### design
### implementacao

Branches de Equipe por Fase:
Dentro de cada fase, cada equipe trabalha em sua própria branch:
Exemplo: pesquisa/parte-1, design/parte-2, implementacao/parte-3
Cada branch receberá um número de identificação associado a um coladorador no projeto.
Branches de Tema por Fase:
Dentro de cada equipe, os temas são divididos em branches separadas:
Após concluir o trabalho em cada fase, as alterações são integradas na branch main

```

├── main
│   ├── pesquisa
│   │   ├── pesquisa
│   │   │   ├── pesquisa/parte-1
│   │   │   └── pesquisa/parte-2
│   │   ...
│   ├── design
│   │   ├── design
│   │   │   ├── design/parte-1
│   │   │   ├── design/parte-2
│   │   ...
│   ├── implementacao
│   │   ├── implementacao/
│   │   │   ├── implementacao/feature/(nome-da-feature)-1
│   │   │   ├── implementacao/feature/(nome-da-feature)-2
            ├── implementacao/feature/(nome-da-feature)-3
            ├── implementacao/feature/(nome-da-feature)-4
│   │   │   └── implementacao/feature/(nome-da-feature)-5
```
### 1. Conventional Commits

O padrão de commit mais popular, com uma estrutura clara e consistente para mensagens de commit. A estrutura básica é:


- **tipo**: Especifica o tipo de mudança (ex: `feat`, `fix`).
- **escopo** (opcional): Indica a área do código afetada (ex: `auth`, `button`).
- **mensagem**: Descrição sucinta da mudança.

#### Tipos Comuns de Commit:

- `feat`: Adição de uma nova funcionalidade.
- `fix`: Correção de um bug.
- `docs`: Alterações na documentação.
- `style`: Mudanças no estilo (espaçamento, formatação, etc).
- `refactor`: Refatoração de código (sem alterar comportamento).
- `perf`: Alterações que melhoram o desempenho.
- `test`: Adição ou correção de testes.
- `chore`: Tarefas de manutenção (ex.: atualização de dependências).
