# Apuração de Votos

O real objetivo aqui é implementar uma API Restful para votação. O projeto "Apuração de Votos" permite o usuário votar em um dos participantes cadastrado. Além disso, a API é capaz de retornar a quantidade de votos que um dado canditato possui.

## 🔨 Ferramentas Necessárias
Este projeto foi desenvolvido utilizando as seguintes ferramentas e softwares:

- [NodeJS](https://nodejs.org/en/)
- [Visual Studio](https://code.visualstudio.com/download)
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Compass](https://docs.mongodb.com/compass/current/)
- [Postman](https://www.postman.com/)


## 🧪 Tecnologias
O projeto foi desenvolvido com as seguintes tecnologias:

- [JavaScript](https://nodejs.org/en/)
- [Express](https://firebase.google.com/)


## 💻 Instalações Iniciais
Antes de proceguirmos com o projeto é necessário algumas instalações antes. A princípio instale o MongoDB e o Compass em sua máquina, se ainda não o fez, o [manual oficial de instalação poderá te auxiliar nesta etapa](https://docs.mongodb.com/manual/administration/install-community/).
- [MongoDB para Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)
- [MongoDB para Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Compass](https://docs.mongodb.com/compass/current/)

Como segunda opção segue abaixo o video para instalação em sistema operacional Linux e Windows:
- [Linux](https://www.youtube.com/watch?v=--BMFfwYOCM)
- [Windows](https://www.youtube.com/watch?v=Q7O_2A5SERM)

Para se certificar que a instalação foi bem sucedida, abra o terminal e digite a seguinte instrução:
```bash
$ mongod --version
```
O resultado desta operação deve ser similar ao texto:
```bash
$ mongod --version
db versão v3.*
```

O passo seguinte requer a instalação do Postman para podermos testar as rotas da API futuramente. Segue o [link para download](https://www.postman.com/downloads/).
Vale lembrar que o software de verificação das rotas não necessariamente deve ser o Postman, aqui a preferencia é do usuário.


## 🚀 Inicializando o projeto
Abra o projeto em uma IDE de sua preferencia, indico que o faça pelo *Visual Studio*. A seguir, para inicialo siga os passos abaixo:

```bash
# Instalar as dependências
$ npm

# Iniciar o projeto
$ npm start
```

Execute o servidor e certifique-se de que consegue se conectar ao banco de dados:

```bash
$ node server.js 
Server is listening on port 3000
Successfully connected to the database
```













