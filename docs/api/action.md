---
id: action
title: Ações
sidebar_label: Ações
sidebar_position: 2
---

## Criando uma Ação

Veja abaixo um exemplo de como você pode criar ou atualizar uma ação `sell`, com os atributos `product` e `price` utilizando a Funifier API:

**Method**: `POST`  
**Path**: `/v3/action`  

**Headers**:  
- `Authorization`: `Bearer YOUR_ACCESS_TOKEN`  
- `Content-Type`: `application/json`  

**Request Body**:
```json
{
    "_id": "sell",
    "active": true,
    "action": "Sell",
    "attributes": [
        {"name": "product", "type": "String"}, 
        {"name": "price", "type": "Number"}
    ]
}
```

## Campos de uma Ação

|Campo|Descrição|
|------|----------|
|**_id**| Identificador único da ação, não pode conter espaços ou caracteres especiais. |
|**active**| Indica se este tipo de ação poderá ser executada pelos jogadores ou não.|
|**action**| Nome amigável da ação para ser apresentado nas interfaces gráficas.|
|**attributes**| Lista de atributos que a ação recebe quando for realizada por um jogador.|
|**attributes.name**| Id do atributo, não pode conter espaços ou caracteres especiais.|
|**attributes.type**| Tipo de dados do atributo, pode ser: String, Number, ou Boolean.|





## Exemplo do Postman
Baixe aqui a colecao do postman com os exemplos de requisicoes deste tutorial [Download da Coleção do Postman](/postman/action.postman_collection.json)