<h1 align="center" style="font-weight: bold;">Fatto a mano - API 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Primeiros passos</a> • 
  <a href="#user-routes">User Endpoints</a> • 
  <a href="#category-routes">Category Endpoints</a> • 
  <a href="#product-routes">Products Endpoints</a> • 
  <a href="#order-routes">Order Endpoints</a> • 
  <a href="#item-routes">Item Endpoints</a> • 
 
</p>

<p align="center">
    <b>Desenvolvimento de uma api de gestão para pizzaria</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL

<h2 id="started">🚀 Primeiros Passos</h2>

<h3>Pré Requisitos</h3>

- [Node.js](https://nodejs.org/pt)
- [Git](https://git-scm.com/)

<h3>Clone o Projeto</h3>

```bash
git clone https://github.com/reisArthur2602/sistema-pizzaria-backend
```

<h3>Configure as váriaveis .env </h2>

Use o`.env.example` como referência para criar seu arquivo de configuração `.env` com suas credenciais

```yaml
DATABASE_URL="postgresql://postgresql:password@localhost:5432/mydb?schema=public"
PORT=
JWT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

<h3>Para iniciar o projeto</h3>

```bash
cd nome-do-projeto
npm install
npx prisma migrate dev
npm run dev
```

<h2 id="user-routes">📍 User Endpoints</h2>

| Rotas                          | Descrição                                                                 |
| ------------------------------ | ------------------------------------------------------------------------- |
| <kbd>POST /user/register</kbd> | Cadastrar usuario [Detalhes da requisição](#register-user)                |
| <kbd>POST /user/session</kbd>  | Logar usuario [Detalhes da requisição](#session-user)                     |
| <kbd>GET /user/details</kbd>   | Buscar detalhes do usuário logado [Detalhes da requisição](#details-user) |

<h3 id="register-user">POST /user/register</h3>

**REQUEST**

```json
"body": {
	"email": "arthur@gmail.com",
	"password": "123456"
}
```

<h3 id="session-user">POST /user/session</h3>

**REQUEST**

```json
"body": {
  "email": "arthur@gmail.com",
  "password": "123456"
}
```

**RESPONSE**

```json
{
  "user": {
    "id": "86a3d966-0e8d-4a1a-86e2-ffeccf13fe5b",
    "email": "arthur@gmail.com",
    "password": "$2b$08$AqcR3Yt7h8muvmVLtYd87e8MoOHcZiV20oxzJ7iG1xTBhr6du6uHC"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzE2MDYwNTIsImV4cCI6MTczMjIxMDg1Miwic3ViIjoiODZhM2Q5NjYtMGU4ZC00YTFhLTg2ZTItZmZlY2NmMTNmZTViIn0.MyrOnNsRqmWoUf_ieSWVjioXMqb8tl7bk9Q5JlK_z8g"
}
```

<h3 id="details-user">GET /user/details</h3>

**RESPONSE**

```json
{
  "id": "86a3d966-0e8d-4a1a-86e2-ffeccf13fe5b",
  "email": "arthur@gmail.com",
  "password": "$2b$08$AqcR3Yt7h8muvmVLtYd87e8MoOHcZiV20oxzJ7iG1xTBhr6du6uHC"
}
```

<h2 id="category-routes">📍 Category Endpoints</h2>

| Rotas                           | Descrição                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| <kbd>POST /category</kbd>       | Cadastrar categoria [Detalhes da requisição](#create-category)                      |
| <kbd>GET /category</kbd>        | Listar todas as categorias e seus produtos [Detalhes da requisição](#list-category) |
| <kbd>DELETE /category?id </kbd> | Deletar categoria e seus produtos [Detalhes da requisição](#delete-category)        |

<h3 id="create-category">POST /category</h3>

**REQUEST**

```json
"body": {
  "name":"pizzas"
}
```

<h3 id="list-category">GET /category</h3>

**RESPONSE**

```json
[
  {
    "id": "aa06aeb7-ecb3-4b4c-8bf0-1e56f89301c3",
    "name": "pizzas",
    "created_at": "2024-11-13T21:22:04.430Z",
    "Product": [
      {
        "id": "d72bfe95-5aa7-4de9-b78f-598a96032feb",
        "category_id": "aa06aeb7-ecb3-4b4c-8bf0-1e56f89301c3",
        "name": "pizza de calabresa",
        "description": "Pizza de calabresa",
        "image_url": "http://res.cloudinary.com/ddetuuxug/image/upload/v1731606524/qxmmcrunjtjvepagvynv.jpg",
        "price": 39,
        "created_at": "2024-11-14T17:48:46.655Z"
      }
    ]
  }
]
```

<h3 id="delete-category">DELETE /category?id</h3>

**REQUEST**

```json
"query": {
  "id":"aa06aeb7-ecb3-4b4c-8bf0-1e56f89301c3"
}
```

<h2 id="product-routes">📍 Products Endpoints</h2>

| Rotas                          | Descrição                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------- |
| <kbd>POST /product</kbd>       | Cadastrar produto [Detalhes da requisição](#create-product)                     |
| <kbd>GET /product</kbd>        | Listar todos os produtos e sua categoria [Detalhes da requisição](#get-product) |
| <kbd>DELETE /product?id </kbd> | Deletar produto [Detalhes da requisição](#delete-product)                       |

<h3 id="create-product">POST /product</h3>

**REQUEST**

```json
"body":{
    "name": "sorvete de chocolate",
    "price": 9,
    "category_id": "fa3d2824-ce8e-467d-a620-d88d6cd70594",
    "description": "sorvete de chocolate",
    "image_url":{
        "lastModified": 1731606979178,
        "lastModifiedDate": "Thu Nov 14 2024 14:56:19 GMT-0300",
        "name":"sorvete-chocolate.png",
        "size": 949025,
        "type": "image/png",
       "webkitRelativePath": ""
    }
}
```

<h3 id="get-product">GET /product</h3>

**RESPONSE**

```json
[
  {
    "id": "40257181-a127-45af-ad68-4aef5753457e",
    "category_id": "fa3d2824-ce8e-467d-a620-d88d6cd70594",
    "name": "sorvete de chocolate",
    "description": "sorvete de chocolate",
    "image_url": "http://res.cloudinary.com/ddetuuxug/image/upload/v1731607558/igxaswoujpqqx0r5f6bn.png",
    "price": 9,
    "created_at": "2024-11-14T18:06:01.403Z",
    "category": {
      "id": "fa3d2824-ce8e-467d-a620-d88d6cd70594",
      "name": "doces",
      "created_at": "2024-11-13T21:59:48.495Z"
    }
  }
]
```

<h3 id="delete-product">DELETE /product?id</h3>

**REQUEST**

```json
"query": {
  "id":"40257181-a127-45af-ad68-4aef5753457e"
}
```

<h2 id="order-routes">📍 Order Endpoints</h2>

| Rotas                             | Descrição                                                                                                                              |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>POST /order</kbd>            | Abrir um pedido [Detalhes da requisição](#create-order)                                                                                |
| <kbd>GET /order</kbd>             | Listar todos os pedidos e seus itens não que estejam em rascunho [Detalhes da requisição](#list-order)                                 |
| <kbd>GET /order/current</kbd>     | Listar todos os pedidos e seus itens não que estejam em rascunho para a data atual [Detalhes da requisição](#list-order-in-production) |
| <kbd>GET /order?id</kbd>          | Buscar pedido [Detalhes da requisição](#show-order)                                                                                    |
| <kbd>PATCH /order/send?id</kbd>   | Enviar pedido para produção [Detalhes da requisição](#send-order)                                                                      |
| <kbd>PATCH /order/finish?id</kbd> | Finalizar pedido [Detalhes da requisição](#finish-order)                                                                               |
| <kbd>DELETE /order?id</kbd>       | Deletar pedido [Detalhes da requisição](#delete-order)                                                                                 |

<h3 id="create-order">POST /order</h3>

**REQUEST**

```json
 "body": {
  "table": 2
}
```

**RESPONSE**

```json
{
  "id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2"
}
```

<h3 id="#list-order">GET /order</h3>

**RESPONSE**

```json
[
  {
    "id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2",
    "table": 10,
    "status": false,
    "draft": false,
    "created_at": "2024-11-14T18:14:34.346Z",
    "Item": [
      {
        "id": "c786f6c6-5ed4-4aba-804d-c7e37073d572",
        "order_id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2",
        "product_id": "40257181-a127-45af-ad68-4aef5753457e",
        "quantity": 1,
        "created_at": "2024-11-14T18:19:32.238Z",
        "product": {
          "id": "40257181-a127-45af-ad68-4aef5753457e",
          "category_id": "fa3d2824-ce8e-467d-a620-d88d6cd70594",
          "name": "sorvete de chocolate",
          "description": "sorvete de chocolate",
          "image_url": "http://res.cloudinary.com/ddetuuxug/image/upload/v1731607558/igxaswoujpqqx0r5f6bn.png",
          "price": 910,
          "created_at": "2024-11-14T18:06:01.403Z"
        }
      }
    ]
  }
]
```

<h3 id="list-order-in-production">GET /order/current</h3>

**RESPONSE**

```json
[
  {
    "id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2",
    "table": 10,
    "status": false,
    "draft": false,
    "created_at": "2024-11-14T18:14:34.346Z",
    "Item": [
      {
        "id": "c786f6c6-5ed4-4aba-804d-c7e37073d572",
        "order_id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2",
        "product_id": "40257181-a127-45af-ad68-4aef5753457e",
        "quantity": 1,
        "created_at": "2024-11-14T18:19:32.238Z",
        "product": {
          "id": "40257181-a127-45af-ad68-4aef5753457e",
          "category_id": "fa3d2824-ce8e-467d-a620-d88d6cd70594",
          "name": "sorvete de chocolate",
          "description": "sorvete de chocolate",
          "image_url": "http://res.cloudinary.com/ddetuuxug/image/upload/v1731607558/igxaswoujpqqx0r5f6bn.png",
          "price": 910,
          "created_at": "2024-11-14T18:06:01.403Z"
        }
      }
    ]
  }
]
```

<h3 id="show-order">GET /order?id</h3>

**REQUEST**

```json
 "query": {
  "id":"f3f50332-4d18-437d-a4d7-bd91dfb220d2"
}
```

**RESPONSE**

```json
{
  "id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2",
  "table": 10,
  "status": false,
  "draft": false,
  "created_at": "2024-11-14T18:14:34.346Z",
  "Item": [
    {
      "id": "c786f6c6-5ed4-4aba-804d-c7e37073d572",
      "order_id": "f3f50332-4d18-437d-a4d7-bd91dfb220d2",
      "product_id": "40257181-a127-45af-ad68-4aef5753457e",
      "quantity": 1,
      "created_at": "2024-11-14T18:19:32.238Z",
      "product": {
        "id": "40257181-a127-45af-ad68-4aef5753457e",
        "category_id": "fa3d2824-ce8e-467d-a620-d88d6cd70594",
        "name": "sorvete de chocolate",
        "description": "sorvete de chocolate",
        "image_url": "http://res.cloudinary.com/ddetuuxug/image/upload/v1731607558/igxaswoujpqqx0r5f6bn.png",
        "price": 910,
        "created_at": "2024-11-14T18:06:01.403Z"
      }
    }
  ]
}
```

<h3 id="send-order">PATCH /order/send?id</h3>

**REQUEST**

```json
"query": {
  "id":"f3f50332-4d18-437d-a4d7-bd91dfb220d2"
}
```

<h3 id="finish-order">PATCH /order/finish?id</h3>

**REQUEST**

```json
"query": {
  "id":"f3f50332-4d18-437d-a4d7-bd91dfb220d2"
}
```

<h3 id="#delete-order">DELETE /order?id</h3>

**REQUEST**

```json
"query": {
  "id":"f3f50332-4d18-437d-a4d7-bd91dfb220d2"
}
```

<h2 id="item-routes">📍 Item Endpoints</h2>

| Rotas                            | Descrição                                                        |
| -------------------------------- | ---------------------------------------------------------------- |
| <kbd>POST /order/item</kbd>      | Adicionar item a um pedido [Detalhes da requisição](#add-item)   |
| <kbd>DELETE /order/item?id</kbd> | Deletar item de um pedido [Detalhes da requisição](#delete-item) |

<h3 id="add-item">POST /order/item</h3>

**REQUEST**

```json
"body": {
  "quantity":1,
  "order_id":"f3f50332-4d18-437d-a4d7-bd91dfb220d2",
  "product_id":"40257181-a127-45af-ad68-4aef5753457e"
}
```

<h3 id="delete-item">DELETE /order/item?id</h3>

**REQUEST**

```json
"query": {
  "id":"c786f6c6-5ed4-4aba-804d-c7e37073d572"
}
```
