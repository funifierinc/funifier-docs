---
id: actions
title: Ações
sidebar_label: Ações
sidebar_position: 2
---

## O que é uma Ação

Ação é a declaração do que os jogadores podem fazer na gamificação. Por exemplo, “vender”, “comprar”, “comentar”, “compartilhar”, “seguir”, “visitar”, “logar”, “reunir”, “ligar”, “estudar”, etc. No contexto de um cenário de vendas, por exemplo, você pode configurar uma ação "vender", que pode ter atributos adicionais como "produto" e "valor" da venda. Uma vez que você definiu quais são as ações que podem ser feitas pelos jogadores, então você pode usar estas ações na estratégia de gamificação, conectadas as várias técnicas de jogos disponíveis na plataforma. As ações podem ser configuradas através do FUNIFIER STUDIO ou pela FUNIFIER API.

O caminho para configuração de ações no STUDIO é: `/studio/action`

O endpoint para configuração de ações na API REST é: `/v3/action`

## Configurando uma Ação

A configuração de uma ação é composta de duas informações essenciais: o id e os atributos. As ações são armazenadas na coleção "action". Veja abaixo um exemplo de configuração de uma ação `sell`, com os atributos `product` e `price` utilizando o Funifier Studio:

![Configuração via Funifier Studio](/img/studio/action-form.png)

Veja abaixo um exemplo de configuração desta mesma ação `sell`, com os atributos `product` e `price` utilizando a Funifier API:

**Método**: `POST`  
**Endpoint**: `/v3/action`  
**Corpo da Requisição:**
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
|**_id**| Identificador único da ação, não pode conter espaços ou caracteres especiais.|
|**active**| Indica se este tipo de ação poderá ser executada pelos jogadores ou não.|
|**action**| Nome amigável da ação para ser apresentado nas interfaces gráficas.|
|**attributes**| Lista de atributos que a ação recebe quando for realizada por um jogador.|
|**attributes.name**| Id do atributo, não pode conter espaços ou caracteres especiais.|
|**attributes.type**| Tipo de dados do atributo, pode ser: String, Number, ou Boolean.|

