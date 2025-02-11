
# 🧠 Dicionário do Programador 🚀  

Seja bem-vindo ao **Dicionário do Programador**, um projeto criado para te dar aquele conhecimento que **ninguém te ensina na faculdade, mas que você vai levar para a vida**!  

Aqui, você vai encontrar definições e conceitos essenciais para entender melhor o universo da programação, explorar diferentes áreas da tecnologia e tomar decisões mais assertivas sobre o seu futuro na carreira.  

![image](https://github.com/user-attachments/assets/09250b18-b685-42b8-9229-dc5eca5b374f)

## 🎯 Nosso Objetivo  
- **Te guiar além do código**: conceitos de mercado, boas práticas, ferramentas e metodologias que fazem a diferença na sua jornada.  
- **Expandir seu horizonte**: descubra as diversas áreas da tecnologia e encontre a que mais combina com você.  
- **Criar uma base sólida**: tenha um repositório de conhecimento acessível, direto e atualizado pela comunidade.  

💡 **Seja você um iniciante ou um desenvolvedor experiente, aqui tem algo novo para aprender!**  

📌 **Quer contribuir?** Fique à vontade para abrir uma issue, sugerir novos termos ou aprimorar as definições existentes!  

✨ **Dê uma ⭐ no repositório e compartilhe com outros devs!** Vamos juntos construir um material que faça a diferença!  

🔗 **Acesse:** [Dicionário do Programador](https://github.com/douglasin/dicionario-do-programador/)  


## 📂 - Estrutura do Projeto
Este projeto está organizado em três fases principais:

`Pesquisa` , `Design` e `Implementação`. 





``` 🫚 - /projeto
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
![image](https://github.com/user-attachments/assets/261d406f-9996-4981-8104-491525b5f568)

![image](https://github.com/user-attachments/assets/3a711d51-17b2-41f1-b7ae-2111018f631d)

🔧 Fluxo de Trabalho
Branch Principal (main):
A branch principal onde todas as alterações finalizadas serão mescladas.
Regra: Ninguém deve fazer commits diretamente na main. Todas as alterações devem passar por pull requests após revisão.
Branches de Fase:
Cada fase do projeto (Pesquisa, Design e Implementação) tem sua própria branch principal:

### 🔎​​ Pesquisa:
`Responsáveis: `
### 📱​ - Design
`Responsáveis: `
### 📈​​ - Implementacao
`Responsáveis: `

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
- # Ex: `git commit -m feat: adicionando tela de login 11/02/25 - 10:03`
