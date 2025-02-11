📂 Estrutura do Projeto
Este projeto está organizado em três fases principais: Pesquisa , Design e Implementação . Cada fase possui suas próprias branches e sub-branches para facilitar o desenvolvimento colaborativo e garantir um fluxo de trabalho claro.

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

````
