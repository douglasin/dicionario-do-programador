# dicionario-do-programador
Repositório feito para armazenar alterações no projeto "Dicionário do Programador Infinito"

# Estrutura de Branches
## 1. Branch Principal (main ou master)
A branch principal onde todas as alterações finalizadas serão mescladas.
Regra: Ninguém deve fazer commits diretamente na main. Todas as alterações devem passar por pull requests após revisão. ````

``
## 2. Branches de Fase
Cada fase do projeto (pesquisa, design e implementação) terá sua própria branch principal. Essas branches servirão como áreas de integração para consolidar o trabalho de todas as equipes antes de enviar para a main.

``
pesquisa
design
implementacao
``

### As branches de fase são criadas a partir da main no início do projeto:

```git checkout main
git pull origin main
git checkout -b pesquisa
```

## 3. Branches de Equipe por Fase
Cada equipe trabalhará em suas próprias branches dentro de cada fase. Isso permite que cada equipe tenha autonomia para desenvolver sua parte sem interferir no trabalho das outras.

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
