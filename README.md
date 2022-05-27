<h1 align="center">KenzieFy</h1>

# Tabela de conteúdo

<!--ts-->

- [Sobre](#Sobre)
- [Integrantes](#Integrantes)
- [Aplicação](#Aplicação)
- [Rotas](#Rotas)<br>
  - [GET](#GET)
  - [POST](#POST)
  - [PATCH](#PATCH)
  - [DELETE](#DELETE)
- [Tecnologias](#Tecnologias)
<!--te-->

<br>

# Sobre

- Esta aplicação foi feita sem fins lucrativos para upload e consulta de musicas sem direitos autorais.
- Está é uma api de musicas sem direitos autorais onde é possivel, escutar,
  fazer download, ver os dados da musica e do seu autor, criar contas, fazer upload de musicas, login, criar playlist, atualizar as musicas que fez upload, deletar o usuario e/ou suas musicas.

- Para fazer a consulta de musicas e dos seus autores, não é necessário fazer login ou ter conta.

- Para fazer upload de alguma musica no banco de dados é necessário ter conta cadastrada.
  <br>

# Integrantes

- <a href="https://github.com/andrejubi">André Rodrigues da Silveira.</a> <br>
- <a href="https://github.com/danielrodriguesdnl">Daniel Rodrigues.</a> <br>
- <a href="https://github.com/almeidadylan">Dylan Almeida.</a> <br>
- <a href="https://github.com/LorenzoMarques">Lorenzo Marques.</a> <br>
- <a href="https://github.com/mcastroneto">Márcio Castro.</a> <br>
  <br>

# Aplicação

url base da aplicação no heroku: https://capstone-m4-grupo-14.herokuapp.com/

# Rotas

# <p align="center">GET</p>

1.1 - Para listar todas as musicas, utilize a a rota: <br>
`GET /musics - formato de resposta - status 200`

```json
[
  {
    "id": "357b3141-b69a-4321-8cfa-a69f828c88fb",
    "id_autor": "657b15a8-20ab-4834-a468-e6b967bfeda5",
    "category": "eletronic",
    "name": "Cartoon - C U Again.mp3",
    "key": "bd029002e172debc15590de8d2182ecb-Cartoon - C U Again.mp3",
    "size": "8121078",
    "url": "https://upload-capstone-m4-grupo-14.s3.sa-east-1.amazonaws.com/bd029002e172debc15590de8d2182ecb-Cartoon+-+C+U+Again.mp3",
    "description": "musica feita para dançar ao som dessa batida incrivel",
    "created_at": "Wed May 25 2022 10:03:22 GMT-0400 (Amazon Standard Time)"
  }
]
```

1.2 - Para ler os dados de uma musica especifica e do seu autor, utilize a rota:<br>
`GET /music/<music_id> - formato de resposta - status 200`

```json
{
  "id": "357b3141-b69a-4321-8cfa-a69f828c88fb",
  "id_autor": "657b15a8-20ab-4834-a468-e6b967bfeda5",
  "category": "eletronic",
  "name": "Cartoon - C U Again.mp3",
  "key": "bd029002e172debc15590de8d2182ecb-Cartoon - C U Again.mp3",
  "size": "8121078",
  "url": "https://upload-capstone-m4-grupo-14.s3.sa-east-1.amazonaws.com/bd029002e172debc15590de8d2182ecb-Cartoon+-+C+U+Again.mp3",
  "description": "musica feita para dançar ao som dessa batida incrivel",
  "rating": 0,
  "name_autor": "Cartoon",
  "age_autor": 24
}
```

1.3 - Para ler os dados de todos os autores de musica, utilize a rota:<br>
`GET /autor - formato de resposta - status 200`

```json
[
  {
    "id": "e6b967bfeda5-20ab-4834-a468-657b15a8",
    "name": "Cartoon",
    "age": "27",
    "id_user": "a69f828c88fb-b69a-4321-8cfa-357b3141"
  }
]
```

1.4 - Para ler os dados de um autor especifico, utilize a rota: <br>
`GET /autor/<id_autor> - formato de resposta - 200`

```json
{
  "id": "8cfa-e6b967bfeda5-4834-357b3141",
  "name": "Bethoven",
  "age": "37",
  "bith_date": "17/10/1770",
  "id_user": "a468-657b15a8-b69a-a69f828c88fb",
  "email": null,
  "password": null,
  "CPF": null,
  "phone": null
}
```

1.5 - Para fazer uma listagem de todos os usuario, utilize a rota:<br>
`GET /users - formato de resposta - 200`

```json
[
  {
    "id": "b6ad452c-9217-4f9b-a9ae-9f5bc8fcc022",
    "name": "admin",
    "email": "admin@gmail.com",
    "CPF": "$2b$11$V.tglBHHTHBit7AlSDDZ3ezXDLmyHQrTO/And3xfuY3f6DC3uLLgi",
    "birth_date": "13/13/1300",
    "phone": "12345678910",
    "password": "$2b$10$K9uo3aKOu3dVud0LucE9reIO21KDWa.XWTromTpxrEgEbgv.gCMvm",
    "age": 700
  }
]
```

1.5 - Para ler os dados de um usuario especifico e o seu endereço, utilize a rota:<br>
Atenção! é necessário ter o token de autorização para acessar essa rota.
`GET /users/<user_id> - formato de resposta - 200`

```json
{
  "id": "b6ad452c-9217-4f9b-a9ae-9f5bc8fcc022",
  "name": "admin",
  "email": "admin@gmail.com",
  "CPF": "$2b$11$V.tglBHHTHBit7AlSDDZ3ezXDLmyHQrTO/And3xfuY3f6DC3uLLgi",
  "birth_date": "13/13/1300",
  "phone": "12345678910",
  "password": "$2b$10$K9uo3aKOu3dVud0LucE9reIO21KDWa.XWTromTpxrEgEbgv.gCMvm",
  "age": 700
}
```

1.6 - Para listar todas as playlists de um usuario, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.
`GET /playlist/<user_id> - formato de resposta`

```json
[
  {
    "id": "a468-657b15a8-b69a-a69f828c88fb",
    "name": "Brage Funk",
    "favorite_playlist": false,
    "id_music": "b69a-a69f828c88fb-a468-657b15a8-b69a",
    "id_user": "a468-657b15a8-b69a-a69f828c88fb"
  }
]
```

# <p align="center">POST</p>

2.1 - Para criar uma conta de usuario, utilize a rota:<br>
`POST /users - formato de requisição`

```json
{
  "name": "andre",
  "cpf": "CPF",
  "birth_date": "04/10/1994",
  "phone": "41996515821",
  "email": "andrerodriguessil@gmail.com",
  "password": "admin123",
  "age": 27
}
```

`POST /users - formato de resposta - 201`

```json
{
  "status": "ok",
  "message": "user created",
  "user": {
    "id": "fa391083-e13e-4283-bb41-a0f61f15611f",
    "name": "andre",
    "email": "andrerodriguessil@gmail.com",
    "password": "$2b$10$ItAMU1x.4uPLTIEc2TW7xuxVGAD1JWcQEopgxclkHvBcM95gZIMAi",
    "CPF": "$2b$11$ZT2zRWPlSA3mwSqWozrvd.KeZRD4QMuZPK7my/AtSbivxPKjYQWga",
    "birth_date": "04/10/1994",
    "phone": "41996515821",
    "age": 27
  }
}
```

2.2 - Para fazer login em uma conta, utilize a rota:<br>
`POST /users/login - formato de requisição`

```json
{
  "email": "andrerodriguessil@gmail.com",
  "password": "admin123"
}
```

`POST /users/login - formato de resposta - 200`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlcm9kcmlndWVzc2lsQGdtYWlsLmNvbSIsImlhdCI6MTY1MzYyMDIwOSwiZXhwIjoxNjUzNzA2NjA5fQ.fPnervTSxD4JvoTpgvitV23GDhy328iH9zHKb-eCS0w"
}
```

2.3 - Para criar fazer upload de uma musica, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota:
`POST /music - formato de requisição`

```json
{
  "file": "Skillet-Hero.mp3",
  "id_category": "b78c24d2-236e-4989-883e-402f1af45fab"
}
```

`POST /musics - formato de resposta - 201`

```json
{
  "status": "ok",
  "message": "upload done",
  "upload": {
    "id": "dde12a10-1096-4411-b36d-f458290a1450",
    "name": "Skillet-Hero.mp3",
    "key": "e83e9e57c7249d619ec18875b8afe68c-Skillet-Hero.mp3",
    "size": "3.06 mb",
    "url": "https://upload-capstone-m4-grupo-14.s3.amazonaws.com/e83e9e57c7249d619ec18875b8afe68c-Skillet-Hero.mp3"
  }
}
```

2.4 - Para adicionar um endereço para o usuario, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`POST /adress/<user_id> - formato de requisição`

```json
{
  "CEP": "79040-660",
  "país": "Brasil",
  "estado": "Rio de Janeiro",
  "cidade": "Rio de Janeiro",
  "bairro": "Bairro da Tijuca",
  "rua": "Rua Primeiro de Março",
  "numero": "134",
  "complemento": ""
}
```

`POST /adress/<user_id> - formato de resposta - 200`

```json
{
  "status": "ok",
  "message": "adress created",
  "adress": {
    "id": "a468-657b15a8-b69a-e6b967bfeda5",
    "CEP": "79040-660",
    "país": "Brasil",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "bairro": "Bairro da Tijuca",
    "rua": "Rua Primeiro de Março",
    "numero": "134",
    "complemento": ""
  }
}
```

2.5 - Para criar uma playlist de musica, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`POST /playlist/<user_id> - formato de requisição`

```json
{
  "name": "Eletronica",
  "favorite_playlist": true,
  "id_music": "e6b967bfeda5-20ab-4834-a468-657b15a8"
}
```

`POST /playlist/<user_id> - formato de resposta - 201`

```json
{
  "status": "ok",
  "message": "playlist created",
  "playlist": [
    {
      "id": "357b3141-b69a-4321-8cfa-a69f828c88fb",
      "id_autor": "657b15a8-20ab-4834-a468-e6b967bfeda5",
      "category": "eletronic",
      "name": "Cartoon - C U Again.mp3",
      "key": "bd029002e172debc15590de8d2182ecb-Cartoon - C U Again.mp3",
      "size": "8121078",
      "url": "https://upload-capstone-m4-grupo-14.s3.sa-east-1.amazonaws.com/bd029002e172debc15590de8d2182ecb-Cartoon+-+C+U+Again.mp3",
      "description": "musica feita para dançar ao som dessa batida incrivel",
      "created_at": "Wed May 25 2022 10:03:22 GMT-0400 (Amazon Standard Time)"
    }
  ]
}
```

2.6 - Para adicionar uma musica que ja existe no banco de dados a sua playlist, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`POST /playlist/<playlist_id> formato de requisição `

```json
{
  "music_id": "e6b967bfeda5-20ab-4834-a468-657b15a8"
}
```

`POST /playlist/<playlist_id> - formato de resposta - 201`

```json
{
  "status": "success",
  "message": "music added to playlist"
}
```

# <p align="center">PATCH</p>

3.1 - Para atualizar os dados de um usuario, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`PATCH /users/<user_id> formato de requisição`

```json
{
  "email": "voudeletar@gmail.com",
  "name": "banido"
}
```

`PATCH /users/<user_id> - formato de resposta - 200`

```json
{
  "status": "ok",
  "message": "Updated user",
  "user": {
    "id": "b6ad452c-9217-4f9b-a9ae-9f5bc8fcc022",
    "name": "banido",
    "email": "voudeletar@gmail.com",
    "CPF": "$2b$11$V.tglBHHTHBit7AlSDDZ3ezXDLmyHQrTO/And3xfuY3f6DC3uLLgi",
    "birth_date": "13/13/1300",
    "phone": "12345678910",
    "password": "$2b$10$K9uo3aKOu3dVud0LucE9reIO21KDWa.XWTromTpxrEgEbgv.gCMvm",
    "age": 700
  }
}
```

3.2 - Para atualizar o endereço do usuario, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`PATCH /user/<adress_id> - formato de requisição`

```json
{
  "CEP": "79040-660",
  "país": "Brasil",
  "estado": "Rio de Janeiro",
  "cidade": "Rio de Janeiro",
  "bairro": "Bairro da Tijuca",
  "rua": "Avenida Atlântica",
  "numero": "304",
  "complemento": ""
}
```

`PATCH /user/<adress_id> - formato de resposta - 200`

```json
{
  "status": "ok",
  "message": "adress updated",
  "adress": {
    "id": "357b3141-b69a-4321-8cfa-a69f828c88fb",
    "CEP": "79040-660",
    "país": "Brasil",
    "estado": "Rio de Janeiro",
    "cidade": "Rio de Janeiro",
    "bairro": "Bairro da Tijuca",
    "rua": "Avenida Atlântica",
    "numero": "304",
    "complemento": ""
  }
}
```

3.3 - Para classificar uma musica de 1 a 5 estrelas, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`PATCH /rating/<music_id> - formato de requisição`

```json
{
  "rating": 5
}
```

`PATCH /rating/<music_id> - formato de resposta - 200`

```json
{
  "id": "357b3141-b69a-4321-8cfa-a69f828c88fb",
  "id_autor": "657b15a8-20ab-4834-a468-e6b967bfeda5",
  "category": "eletronic",
  "name": "Cartoon - C U Again.mp3",
  "key": "bd029002e172debc15590de8d2182ecb-Cartoon - C U Again.mp3",
  "size": "8121078",
  "url": "https://upload-capstone-m4-grupo-14.s3.sa-east-1.amazonaws.com/bd029002e172debc15590de8d2182ecb-Cartoon+-+C+U+Again.mp3",
  "description": "musica feita para dançar ao som dessa batida incrivel",
  "created_at": "Wed May 25 2022 10:03:22 GMT-0400 (Amazon Standard Time)",
  "rating": 5
}
```

# <p align="center">DELETE</p>

4.1 - Para deletar uma musica de sua criação, utilize a rota:<br>
OBS: não é possível deletar uma musica que você não fez upload.<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`DELETE /musics/<music_id> - formato de resposta - 200`

```json
{
  "status": "ok",
  "message": "music deleted"
}
```

4.2 - Para deletar uma playlist, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`DELETE /playlist/<playlist_id> - formato de resposta - 200`

```json
{
  "status": "ok",
  "message": "playlist deleted"
}
```

4.3 - Para deletar um usuario, utilize a rota:<br>
Atenção! É necessário ter um token de autorização para acessar essa rota.<br>
`DELETE /users/<user_id> - formato de resposta - 200`

```json
{
  "status": "ok",
  "message": "user deleted"
}
```

# Tecnologias

- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://nodejs.org/en/">NodeJs</a>
- <a href="https://yarnpkg.com/">Yarn</a>
- <a href="https://git-scm.com/">Git</a>
- <a href="https://github.com">GitHub</a>
- <a href="https://www.npmjs.com/package/multer">Multer</a>
- <a href="https://www.npmjs.com/package/multer-s3">Multer-s3</a>
- <a href="https://aws.amazon.com/pt/s3/">AWS-S3</a>
- <a href="https://www.npmjs.com/package/aws-sdk">AWS-SDK</a>
- <a href="https://heroku.com">Heroku</a>
- <a href="https://www.postgresql.org/">PostgreSQL</a>
- <a href="https://www.npmjs.com/package/uuid">uuid</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://typeorm.io/">Typeorm</a>
- <a href="https://jwt.io/">jwt</a>
- <a href="https://www.npmjs.com/package/bcrypt">Bycript</a>
- <a href="https://www.npmjs.com/package/pg">Pg</a>
