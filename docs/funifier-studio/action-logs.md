---
id: action_logs
title: Logs de Ações
sidebar_label: Logs de Ações
sidebar_position: 3
---

## O que é um Log de Ação

Quando um jogador realiza uma ação, esta informação é registrada na plataforma como um log de ação. Por exemplo, quando um jogador faz uma venda de um livro por R$10, isso é um log de ação. A diferença entre ação e log de ação é a seguinte: a ação é apenas a definição do que pode ser feito; enquanto o log de ação é a execução daquela ação por um jogador. Para rodar uma gamificação você precisa enviar para o Funifier os logs de ações executadas pelos jogadores. Todas as técnicas de jogos dependem direta ou indiretamente dos logs de ações para serem acionadas. Os action logs são registrados na coleção "action_log". Os logs de ações podem ser registrados através da FUNIFIER API.

O endpoint para registrar logs de ações na API REST é: `/v3/action/log`

## Registrando um Log de Ação

Veja abaixo como usar a Funifier API para registrar um log de ação, para informar a plataforma, que o jogador john fez uma venda de um livro no valor de 120 reais.:

**Método**: `POST`  
**Endpoint**: `/v3/action/log`  
**Corpo da Requisição:**
```json
{
    "actionId": "sell", 
    "userId": "john", 
    "attributes": {
        "product": "book", 
        "price": 120
    }
}

```

## Campos informados em um log de ação

|Campo|Descrição|
|------|----------|
|**actionId**| Id da ação que está sendo realizada.|
|**userId**| Id do jogador que está realizando a ação.|
|**attributes**| Valores de cada um dos atributos declarados na ação.|

## Campos preenchidos automaticamente pelo Funifier quando um log de ação é registrado

|Campo|Descrição|
|------|----------|
|**_id**| Identificador único deste log de ação no banco de dados.|
|**time**| Data e hora em que o log de ação foi registrado no banco de dados.|
