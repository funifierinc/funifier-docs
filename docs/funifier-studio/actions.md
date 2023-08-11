---
id: actions
title: Actions
sidebar_label: Actions
sidebar_position: 2
---

## What is an Action

Action is the statement of what players can do in gamification. For example, “sell”, “buy”, “comment”, “share”, “follow”, “visit”, “login”, “meet”, “call”, “study”, etc. In the context of a sales scenario, for example, you can configure a "sell" action, which can have additional attributes such as "product" and "amount" of the sale. Once you have defined what are the actions that can be performed by the players, then you can use these actions in the gamification strategy, connected to the various game techniques available on the platform. Actions can be configured through FUNIFIER STUDIO or the FUNIFIER API.

The path for configuring actions in STUDIO is: `/studio/action`

The endpoint for configuring actions in the REST API is: `/v3/action`

## Configuring an Action

The configuration of an action is composed of two essential pieces of information: the id and the attributes. Actions are stored in the "action" collection. Below is an example of configuring a `sell` action, with the `product` and `price` attributes using Funifier Studio:

![Configuration via Funifier Studio](/img/studio/action-form.png)

Below is an example of configuring this same `sell` action, with the `product` and `price` attributes using the Funifier API:

**Method**: `POST`  
**Endpoint**: `/v3/action`  
**Requisition Body:**
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

## Fields of an Action

|Field|Description|
|------|-----------|
|**_id**| Unique identifier of the action, cannot contain spaces or special characters.|
|**active**| Indicates whether this type of action can be performed by players or not.|
|**action**| Friendly name of the action to be displayed in graphical interfaces.|
|**attributes**| List of attributes that the action receives when performed by a player.|
|**attributes.name**| Attribute id, cannot contain spaces or special characters.|
|**attributes.type**| Attribute data type, can be: String, Number, or Boolean.|
