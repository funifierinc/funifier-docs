---
sidebar_position: 4
sidebar_label: Equipes
---

# Equipes



### 1. Equipes

Os jogadores podem ser agrupados em equipes. Isso permite motivar os jogadores com estímulos sociais. Um jogador pode estar em mais de uma equipe se for necessário, e cada equipe pode ter um dono, que representa a equipe sempre que necessário. As equipes podem, assim como os jogadores, possuir atributos adicionais que possam ser relevantes no processo de engajamento. As equipes podem ser configuradas através do FUNIFIER STUDIO ou pela FUNIFIER API.

  

O caminho para configuração de jogadores no STUDIO é: **_/studio/team_**

O endpoint para configuração de jogadores na API REST é: **_/v3/team_**



## # [Funifier | Gamification Solutions](https://my.funifier.com/studio/player)


### 2. Criar Equipes

Na página de Jogadores, clique em 'Equipes'.

![Step 2 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/b7630413-8977-4715-9c04-b9b3166ed018/e7b93033-1139-40a6-8f4a-91980828bc1e.png?crop=focalpoint&fit=crop&fp-x=0.7669&fp-y=0.2580&fp-z=2.7135&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=435&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzEmaD0xNTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 3. Nova Equipe

Clique em 'Novo', para criar e configurar uma nova equipe para a sua gamificação.

![Step 3 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/7af4f78f-efca-4da4-b4c3-0f93ff061963/f76d5731-6c50-4e0c-8171-4283254dd8dc.png?crop=focalpoint&fit=crop&fp-x=0.3012&fp-y=0.2313&fp-z=2.5876&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=466&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjgmaD0xNDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 4. Equipe Simples

Como primeiro exemplo, vamos configurar uma equipe simples, em que o administrador informa manualmente quem são os membros da equipe. A configuração de uma equipe é composta do nome, descrição, imagem, dono da equipe, e se for necessário incluir outras informações, estas podem ser incluídas no campo extra do jogador. As equipes são armazenadas na coleção "team". Veja abaixo um exemplo de configuração de uma equipe:

  

`# Equipe de Vendas`

`# POST /v3/team`

`{`

    `"name": "Sales",`

    `"description": "Sales team",`

    `"image": {`

        `"small": {"url": "https://a.com/a.jpg"},`

        `"medium": {"url": "https://a.com/a.jpg"},`

        `"original": {"url": "https://a.com/a.jpg"}`

    `},`

    `"extra": {`

        `"country": "USA"`

    `},`

    `"owner": "john",`

    `"created": 1688590265930,`

    `"updated": 1689955901394,`

    `"_id": "sales"`

`}`

  

Os campos utilizados nesta configuração de equipe são:

*   "\_id" : Identificador da equipe, não pode conter espaços;
    
*   "name": Nome da equipe;
    
*   "description": Descrição da equipe;
    
*   "image": Imagem da equipe; 
    
*   "owner": Id do jogador responsável pela equipe; 
    
*   "extra": Qualquer informação adicional da equipe; 
    
*   "created": Quando a equipe foi criada no sistema; Gerado automaticamente; 
    
*   "updated": Quando a equipe foi alterada pela última vez; Gerado automaticamente;



### 5. Configurando Equipe

Preencha o nome e descrição da sua equipe, além de escolher uma imagem para representá-la.

![Step 5 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/acf336f8-9354-4632-9ed4-00cd24f7fa7a/563972a4-ffb9-42b4-aece-dfd4085c59f9.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.4481&fp-z=1.1321&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=192&mark-y=101&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NjkmaD02MDYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 6. Membros da Equipe

Após criar uma equipe você poderá incluir jogadores como membros da equipe. O registro dos membros de uma equipe são armazenados dentro da coleção "**_team\_player_**". Para incluir novos membros a uma equipe você pode usar o endpoint abaixo:

  

`# Adicionar membros a equipe`

`# GET /v3/team/{team_id}/member/add/{player_id}`



### 7. Defina os Membros

Na aba Membros ou 'Members', clique no botão laranja para adicionar, manualmente, os membros da sua equipe.

![Step 7 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/94a305a1-335a-473f-9d32-51002a7ff807/b619cb8c-c1f3-4041-af7f-4806ddc7a86e.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1102&mark-y=428&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 8. Inserindo membros na Equipe

Depois de definir através da checkbox ou caixa de seleção, quais serão os membros pertencentes a esta equipe. Aperte em Inserir ou 'Insert' para adiciona-los a equipe que está configurando.

![Step 8 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/47a58d3a-a534-4a5e-b956-f20afcc5fafc/ca0d6f6f-648d-4787-bed1-82cb4c1c75de.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=124&mark-y=648&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDUmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 9. Membros

Pronto. Agora você consegue visualizar quem são os membros que você definiu manualmente para esta equipe.

![Step 9 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/def009a7-bb6e-4c74-8fa3-4c2f9e080f56/3323f99d-0b4f-43d6-823b-1a2f14eb147a.png?crop=focalpoint&fit=crop&fp-x=0.6149&fp-y=0.5889&fp-z=1.3476&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=23&mark-y=189&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTU1Jmg9NDI5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 10. Dono da Equipe

Se você quiser definir um líder para a sua equipe, clique no botão laranja da aba dono ou 'Owner'.

![Step 10 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/2e03c04c-3791-48d1-8b6e-37e384a7461a/44d3dcd8-243b-4892-a0c0-9f43be8c15f9.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1102&mark-y=288&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 11. Definindo Dono da Equipe

Escolha o jogador que você deseja para ser o dono da Equipe, esse pode ter mais permissões que os outros membros.

![Step 11 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/704b0abb-8ea7-4a0f-b2fc-b60fb222dbf6/cc20f887-0e91-4284-b3a2-c63f7a202ebe.png?crop=focalpoint&fit=crop&fp-x=0.4750&fp-y=0.4876&fp-z=1.0529&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=139&mark-y=242&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNCZoPTI0JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 12. Dono da Equipe

Agora é só apertar em Inserir ou 'Insert' e pronto. Agora você já tem o Dono da Equipe.

![Step 12 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/b5745611-9e63-4555-a0ec-5ea78c7ff44a/3cc5c22d-91f6-44bf-b01f-8a273e98758d.png?crop=focalpoint&fit=crop&fp-x=0.1466&fp-y=0.8362&fp-z=2.5828&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=394&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzAmaD0xNDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 13. Extras

Como em Jogadores, você também pode definir informações extras a sua equipe. Clique no botão laranja da aba 'Extra' para fazer isso.

![Step 13 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/38e74be1-179e-4dcb-8c01-262d43701d9e/5b619807-1791-49b5-ba85-9601369388f3.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1102&mark-y=437&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 14. Extras - Exemplo

Nesse exemplo, definimos como informações Extras para essa equipe, que ela pertence a Regional Distrito Federal. Isso será útil para mecânicas futuras na plataforma.

![Step 14 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/e43f606a-373e-4f3d-b08c-669ae4a3bf4d/0de73285-294e-4c38-a3f5-c0b660d1c4e8.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=303&mark-y=316&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NjUmaD0xNTkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 15. Identificador de Equipe

Além disso você pode criar um ID para a Equipe. É só ir até a aba Status e preencher o campo ID.

![Step 15 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/0a95d00d-2a5d-4ea8-bb70-6463c80c23b5/980acd5c-0b97-4c84-a844-3f388417c66e.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=556&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz00NzYmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 16. Salvar

Quando estiver com tudo pronto, é só clicar em 'Salvar', para assim guardar as informações da Equipe que definiu ao Funifier Studio.

![Step 16 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/418c2ede-89ca-4496-b37b-90bdc9686b8f/f877eb10-e792-430a-be2b-316d2b885bae.png?crop=focalpoint&fit=crop&fp-x=0.7181&fp-y=0.6342&fp-z=1.7159&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=802&mark-y=449&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 17. Equipes

Com tudo salvo, nessa tela você pode visualizar, criar, pesquisar, editar ou excluir as suas Equipes.

![Step 17 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/e87617f5-471e-48d3-84d7-4da18a3392f2/1bd2426c-c417-4cbb-b99c-dc48a2afe02f.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.4454&fp-z=1.1321&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=192&mark-y=103&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NjkmaD02MDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 18. Equipes - Exemplo

Lembre-se de que você pode configurar quantas equipes a sua gamificação precisar, vai depender de como planeja rodar a sua gamificação.

![Step 18 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/a99cad4f-2347-4de7-bd71-adba2a175eca/a800f36a-2c68-4fb1-b5d2-6e6dc50aea04.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.4454&fp-z=1.1321&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=192&mark-y=103&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NjkmaD02MDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 19. Equipes Dinâmicas

Você também pode criar equipes onde os membros são calculados dinamicamente pela plataforma. Neste caso é necessário utilizar o campo "dynamic" da configuração da equipe,  para fornecer o nome da coleção e um aggregate que deverá ser executado para retornar para a plataforma o ID dos jogadores membros desta equipe. Veja abaixo um exemplo de equipe dinâmica, onde os membros são todos os jogadores que têm o atributo "[extra.country](http://extra.country)" igual a USA:

  

`# Equipe dos EUA`

`# POST /v3/team`

`{`

    `"name": "USA Team",`

    `"description": "All players that have the extra.country field equals to USA",`

    `"dynamic": {`

        `"entity": "player",`

        `"aggregate": "[{\"$match\":{\"extra.country\":\"USA\"}},{\"$project\":{\"_id\":1}}]"`

    `},`

    `"extra": {},`

    `"created": 1689956363282,`

    `"updated": 1689956473159,`

    `"_id": "usa_team"`

`}`

  

Os campos utilizados nesta configuração de equipe são:

*   "dynamic.entity" : Coleção onde o comando aggregate deverá ser executado;
    
*   "dynamic.aggregate": Comando para retornar o id dos membros desta equipe;



### 20. Criando Equipes Dinâmicas

Para criar uma Equipe Dinâmica, abra a página de configuração da equipe, vá na aba Dinâmica, e clique no botão para ativar a Equipe Dinâmica.

![Step 20 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/5756e34a-d2de-4527-abb0-1905c4d8ee74/41f84898-7e42-4b5a-a330-be000cf248a8.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=302&mark-y=255&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NjUmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 21. Finalizando Equipes Dinâmicas

Finalize com o código Aggregate que, deverá ser executado para retornar para a plataforma o ID dos jogadores membros desta equipe. Como no exemplo abaixo.

![Step 21 screenshot](https://images.tango.us/workflows/0c7205ee-4162-4162-96dc-1659446bd990/steps/f4f4d5f1-6366-4b5f-9a8c-cc72d31f8b55/99ab7eba-a7ee-435c-9060-ff78c123f354.png?crop=focalpoint&fit=crop&fp-x=0.6027&fp-y=0.5198&fp-z=1.2769&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=9&mark-y=139&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTgyJmg9NTI5JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)
