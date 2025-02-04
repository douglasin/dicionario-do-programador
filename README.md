📂 Estrutura do Projeto
Este projeto está organizado em três fases principais: Pesquisa , Design e Implementação . Cada fase possui suas próprias branches e sub-branches para facilitar o desenvolvimento colaborativo e garantir um fluxo de trabalho claro.

🔧 Fluxo de Trabalho
Branch Principal (main):
A branch principal onde todas as alterações finalizadas serão mescladas.
Regra: Ninguém deve fazer commits diretamente na main. Todas as alterações devem passar por pull requests após revisão.
Branches de Fase:
Cada fase do projeto (Pesquisa, Design e Implementação) tem sua própria branch principal:
pesquisa
design
implementacao
Branches de Equipe por Fase:
Dentro de cada fase, cada equipe trabalha em sua própria branch:
Exemplo: pesquisa/team-1, design/team-2, implementacao/team-3
Branches de Tema por Fase:
Dentro de cada equipe, os temas são divididos em branches separadas:
Exemplo: pesquisa/team-1/tema-1, design/team-2/tema-4, implementacao/team-3/tema-7
Branch de Integração Final (develop):
Após concluir o trabalho em cada fase, as alterações são integradas na branch develop antes de serem mescladas com a main

```
main
├── develop
│   ├── pesquisa
│   │   ├── pesquisa/team-1
│   │   │   ├── pesquisa/team-1/tema-1
│   │   │   ├── pesquisa/team-1/tema-2
│   │   │   └── pesquisa/team-1/tema-3
│   │   ├── pesquisa/team-2
│   │   │   ├── pesquisa/team-2/tema-4
│   │   │   ├── pesquisa/team-2/tema-5
│   │   │   └── pesquisa/team-2/tema-6
│   │   ...
│   ├── design
│   │   ├── design/team-1
│   │   │   ├── design/team-1/tema-1
│   │   │   ├── design/team-1/tema-2
│   │   │   └── design/team-1/tema-3
│   │   ├── design/team-2
│   │   │   ├── design/team-2/tema-4
│   │   │   ├── design/team-2/tema-5
│   │   │   └── design/team-2/tema-6
│   │   ...
│   ├── implementacao
│   │   ├── implementacao/team-1
│   │   │   ├── implementacao/team-1/tema-1
│   │   │   ├── implementacao/team-1/tema-2
│   │   │   └── implementacao/team-1/tema-3
│   │   ├── implementacao/team-2
│   │   │   ├── implementacao/team-2/tema-4
│   │   │   ├── implementacao/team-2/tema-5
│   │   │   └── implementacao/team-2/tema-6
│   │   ...
```

````
