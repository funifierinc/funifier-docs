---
sidebar_position: 3
sidebar_label: Jogadores
---

# Jogadores
### 1. Jogadores

Dentro da gamificação os jogadores ou players são os agentes que executam as ações, ou seja, são as pessoas a serem engajadas com a gamificação. Dentro da plataforma é possível criar o cadastro desses jogadores com quaisquer informações relevantes para estratégia de engajamento como por exemplo nome, e-mail, foto, departamento, sexo, localização geográfica, telefone, e qualquer outro atributo que seja relevante para o jogador dentro do processo de engajamento. Os jogadores podem ser configurados através do FUNIFIER STUDIO ou pela FUNIFIER API.

  

O caminho para configuração de jogadores no STUDIO é: **_/studio/player_**

O endpoint para configuração de jogadores na API REST é: **_/v3/player_**



## # [Funifier | Gamification Solutions](https://my.funifier.com/studio/dashboard)


### 2. Criar novo jogador

Para criar um novo jogador, vá na tela inicial do projeto e clique em 'Criar usuários e equipes'

![Step 2 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/c69e7446-8be0-4167-b5d9-646d1a1a881e/0727e559-b758-483a-9127-a51cb88dd8c8.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=932&mark-y=445&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00ODYmaD0xMTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 3. Novo jogador

Clique em 'Novo' para adicionar um novo jogador a sua gamificação.

![Step 3 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/b88f9549-669a-4cac-8276-0f580c66f211/e39ae86e-a481-4194-b012-b3955e815682.png?crop=focalpoint&fit=crop&fp-x=0.3012&fp-y=0.2580&fp-z=2.5876&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=466&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjgmaD0xNDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 4. Configuração

A configuração de um jogador é composta do login, nome, email, image, equipes, amigos, e se for necessário incluir outras informações, estas podem ser incluídas no campo extra do jogador. Os jogadores são armazenados na coleção "player". Veja abaixo um exemplo de configuração de um jogador:

  

`# Jogador John`

`# POST /v3/player`

`{`

    `"_id": "john",`

    `"name": "John Travolta",`

    `"email": "john@funifier.com",`

    `"image": {`

        `"small": {"url": "https://a.com/a.jpg"},`

        `"medium": {"url": "https://a.com/a.jpg"},`

        `"original": {"url": "https://a.com/a.jpg"}`

    `},`

    `"teams": ["sales"],`

    `"friends": ["ricardo", "sandra", "igor", "marcilio"],`

    `"extra": {`

        `"country": "USA",  "department": "IT", "active": true,`

        `"sports": ["soccer", "cycling", "surf"]`

    `},`

    `"created": 1688590645776,`

    `"updated": 1688930284891`

`}`

  

Os campos utilizados nesta configuração de jogador são:

*   "\_id" : Login do jogador, não pode conter espaços;
    
*   "name": Nome do jogador;
    
*   "email": Email do jogador;
    
*   "image": Imagem do jogador; 
    
*   "teams": Ids das equipes que o jogador está vinculado como membro; 
    
*   "friends": Ids dos amigos do jogador;
    
*   "extra": Qualquer informação adicional do jogador; 
    
*   "created": Quando o jogador foi criado no sistema; Gerado automaticamente; 
    
*   "updated": Quando o jogador foi alterado pela última vez; Gerado automaticamente;



### 5. Configurando um jogador

Para configurar um jogador, preencha as informações relevantes do mesmo.

![Step 5 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/4b4652b8-a50a-48f2-a562-c2540bfeeb00/14dd3431-0a87-451d-bf12-7355bf4715ac.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=300&mark-y=88&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NjkmaD00NzgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 6. Mais informações

Assim que tiver configurado o básico do seu jogador, você pode adicionar informações adicionais que serão úteis durante a gamificação. Clique na seta para baixo na aba 'Mais' para fazer isso.

![Step 6 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/bf6c45ee-c507-40a6-844f-516c07d97a26/a775222c-3ac1-4aa6-9b8e-f39f605422a5.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1106&mark-y=579&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 7. Mais informações

Na aba Mais você pode definir diversas características adicionais ao seu jogador, defina o que achar relevante e deixe sua gamificação cada vez mias completa.

![Step 7 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/e891df74-a43d-41f7-a8b9-d42d97b7a2da/06d600a7-1562-496f-801f-d9445dbbb584.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=303&mark-y=246&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NjUmaD00NTgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 8. Extra - Exemplo

Como exemplo, definimos que essa jogadora, faz parte de determinada localização geográfica na sua empresa. Isso vai ser útil quando aplicarmos técnicas em equipe, por exemplo.

![Step 8 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/57f5164f-ff22-4f85-a17b-f3e96a5204d7/b5ce6eff-30c4-48c3-aa6e-f420e7adbffc.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.6751&fp-z=1.3476&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=23&mark-y=307&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTUzJmg9Mjk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 9. Amigos

Se fizer sentido para a sua gamificação, você também pode definir amigos entre os jogadores que criou.

![Step 9 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/43a1a83e-1ebb-48e6-a2df-559419aec4ff/cb2077bd-7df9-4557-b4d2-9d862988010a.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1102&mark-y=346&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 10. Exemplo de Amigos

Nesse exemplo, definimos que estes dois jogadores que selecionamos com a checkbox ou  
caixa de seleção, são amigos da jogadora que estamos configurando. Isso pode ser útil em mecânicas futuras. Quando escolher os jogadores em específicos para serem amigos da jogadora que está configurando, é só apertar em Inserir.

![Step 10 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/80ad0b07-fb9c-4376-95fa-c65334911900/c0188742-9bd1-4c17-be86-8bf197d347c7.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=124&mark-y=657&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDUmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 11. Logins Alternativos

Além disso, você pode configurar tipos de entrada alternativos para os jogadores. Isso pode ser muito interessante pensando em dinâmicas futuras, principalmente se a gamificação tiver integração com outras plataformas, como por exemplo, redes sociais.

![Step 11 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/a1589f6f-9047-4793-a24b-fd07441b4edf/9a770d95-b854-4aa3-a972-5f9e9d7a358b.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1103&mark-y=577&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 12. Logins Alternativos - Exemplo

Nesse exemplo, definimos que além do Login que já conhecemos, a jogadora também é representada por outras entradas, nesse caso, pelo seu email, usuário do twitter, e também do Instagram.

![Step 12 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/cc2f9380-c573-4cc8-ba8e-21235cd1ad69/fa0c4205-5046-4d2f-bdeb-de3ed1c618f5.png?crop=focalpoint&fit=crop&fp-x=0.6117&fp-y=0.6167&fp-z=1.3359&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=23&mark-y=116&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTU1Jmg9NTc1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 13. Status

No final da página você pode conferir quando o usuário foi criado, e quando foi sua ultima alteração.

![Step 13 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/65d2837d-3121-44b8-a0cc-9ff54ce9790a/d28a44c3-1a6d-45a9-a9b9-4cc6561453f4.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=2.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=-64&mark-y=423&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODA1Jmg9Mjc4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 14. Salvar

Assim que estiver com toda a configuração pronta, é só apertar em 'Salvar' para salvar o jogador e suas configurações no Funifier Studio.

![Step 14 screenshot](https://images.tango.us/workflows/a078ff7f-5858-48c8-ae4c-a468cca3b551/steps/f79a2fab-b324-4e21-958d-c7af1c8d4aad/256f6715-c87c-455b-9df8-2fefa23ff29a.png?crop=focalpoint&fit=crop&fp-x=0.8883&fp-y=0.7248&fp-z=3.2318&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=451&mark-y=314&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02MzEmaD0xNzkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
