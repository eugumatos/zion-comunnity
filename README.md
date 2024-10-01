
# Zion Community

Este é um projeto de simulação de uma rede onde membros da igreja Zion podem criar e visualizar postagens. O projeto é construído usando Next.js 14 e utiliza socket.io para comunicação em tempo real e sqlite para armazenamento dos posts.

## Pré-requisitos

 - [zion-community-socket](https://github.com/eugumatos/zion-community-socket)
 - [Node]() 18.17 ou superior
 - [PNPM]()


## Passos para rodar o projeto

#### Rodar o servidor Socket.IO

Clone o repositório do servidor de socket e siga os passos abaixo:
```bash
git clone https://github.com/sua-org/zion-community-socket.git
cd zion-community-socket
pnpm install
pnpm start
```

#### Instalar dependências do projeto Next.js

```bash
pnpm install
```

#### Configuração do banco de dados

Para gerar as tabelas do banco de dados onde serão armazenadas os posts, execute o seguinte comando:

```bash
pnpm db
```
#### Rodar o projeto Next.js
Após as dependências estarem instaladas e o banco de dados configurado, você pode rodar o projeto:

```bash
pnpm dev
```


## Tecnologias usadas

- Next.js
- Clerk
- Socket
- Sqlite
- TailwindCSS
- Tanstack Query

## Video app

If you have any feedback, please reach out to us at fake@fake.com

