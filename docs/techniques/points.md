---
sidebar_position: 1
---

# Pontos



### 1. Pontos

Os pontos são tipos de unidades de medida do status do jogador. Você pode ter vários tipos diferentes de pontos em sua gamificação. Pontos de Experiência (XP), Pontos de Reputação, Karma etc. Em uma gamificação para uma escola você poderia ter pontos para cada disciplina, Ex: Pontos de matemática, história, física, química etc. Esses pontos servem para manter a medir o progresso do jogador. Oferece aos jogadores um sistema de feedback para acompanhar seu progresso. O ponto é um ótimo “Mecanismo de Feedback” na estratégia de gamificação. Mostrar às pessoas sua pontuação e como elas mudam com base em pequenas melhorias, muitas vezes as motiva na direção certa. Ao configurar uma técnica de pontos no Funifier, você declara o nome do ponto, por exemplo, "xp", "karma", "moedas" ou simplesmente "pontos". Os pontos podem ser configurados através do FUNIFIER STUDIO ou pela FUNIFIER API.

  

O caminho para configuração de pontos no STUDIO é: **_/studio/point_**

O endpoint para configuração de pontos na API REST é: **_/v3/point_**



## # [Funifier | Gamification Solutions](https://my.funifier.com/studio/technique/GT01)


### 2. Escolhendo pontos

No menu lateral do Funfier Studio, clique em Técnicas de jogos para visualizar as possibilidades de técnicas de engajamento. Identifique a técnica Pontos ou 'Status Points' e clique para configurar.

![Step 2 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/5cc0009b-6923-4eee-8f71-39ccdeccb9ef/5cc1582a-da6e-4e9f-a62a-d9f0e67fe1b0.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=3&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yNjcmaD00NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 3. Tela de Pontos

Aqui você pode visualizar, criar, pesquisar, editar ou excluir as seus pontos.

![Step 3 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/da80bf51-bc58-498b-a519-0291abc642f2/cee6f791-7820-4910-b2a8-05640bb45b49.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=284&mark-y=70&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04OTImaD00MjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 4. Configurando Pontos

A configuração de um ponto é composta de duas informações essenciais: o id e a categoria. Os pontos são armazenados na coleção "point\_category". Veja abaixo um exemplo de configuração de um tipo de ponto:

  

`# Declaração do ponto de experiência XP`

`# POST /v3/point`

`{`

    `"_id": "xp",`

    `"category": "Experience Points",` 

    `"shortName": "XP"`

`}`

  

Os campos utilizados nesta configuração de ação são:

*   "\_id" : Identificador deste ponto, não pode conter espaços ou caracteres especiais;
    
*   "category": Nome amigável deste ponto para ser apresentado nas interfaces gráficas;
    
*   "shortName": Abreviação do nome amigável deste tipo de ponto;



### 5. Criar Pontos

Clique em novo para criar uma novo tipo de pontuação desejada.

![Step 5 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/251f9293-6b44-4282-9bd8-79d60e460914/5d2c2432-94b8-4dcd-8603-91767ea0c4b6.png?crop=focalpoint&fit=crop&fp-x=0.2805&fp-y=0.3276&fp-z=2.6279&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=473&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNTQmaD0xMzUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 6. Definindo Pontos

Preencha o nome e o identificador do ponto que deseja, e atribua uma imagem ao mesmo.

![Step 6 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/f66dfe69-d470-41c2-ba0d-2feff553ba89/e4905ba6-0fab-4e4c-9e74-0a6c427c7ce4.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=285&mark-y=224&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04OTEmaD0zMzAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 7. Abreviação de ponto

Você pode definir uma abreviação para esse ponto. Isso pode ser útil futuramente, trazendo mais agilidade na hora de buscar pelo ponto.

![Step 7 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/af202c6d-6851-4ec2-a958-dcf2b6653b22/003ff967-1778-4d68-a43c-956fa650f877.png?crop=focalpoint&fit=crop&fp-x=0.6067&fp-y=0.5653&fp-z=1.3292&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=341&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTQ1Jmg9NzEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 8. Extra Pontos

Se quiser, pode adicionar informações extras ao seu ponto, da mesma forma demonstrada em ações, jogadores, equipes e etc. Vai depender das informações necessárias em relação a esse ponto para a sua gamificação.

![Step 8 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/4baba9eb-fabf-4d9c-84bc-1b7e4c6eb167/720f3937-b06a-4208-9401-e738302108ef.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=287&mark-y=296&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04ODMmaD0xMzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 9. Salvar Ponto

Com tudo definido da maneira que preferir, clique em 'Salvar' para adicionar esse sistema de Pontos ao seu projeto gamificado no Funifier Studio.

![Step 9 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/d40be724-7e6e-4044-8a54-5a184ae408a2/4988df5a-ccf2-46da-b93e-0b778636b3dc.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=968&mark-y=569&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTkmaD00NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 10. Tela de Pontos

Aqui você vai conseguir visualizar o Ponto que acabou de criar, e suas criações anteriores. Nessa tela você pode visualizar, pesquisar, editar ou excluir os seus pontos.

![Step 10 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/52ee3c63-0dc5-4758-a75e-eed4c52a531b/038ae3d6-e86b-4e23-ab9a-9b8b48bea575.png?crop=focalpoint&fit=crop&fp-x=0.6064&fp-y=0.4304&fp-z=1.1132&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=185&mark-y=85&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NzgmaD01NTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 11. Voltar

Clique em 'Voltar' para enxergar a tela macro de configuração de Pontos.

![Step 11 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/5008a9d1-cabd-4292-8775-a53bcaee5e81/5e2d4e45-645a-4916-88d5-58ff6d51c31d.png?crop=focalpoint&fit=crop&fp-x=0.3520&fp-y=0.3276&fp-z=2.7091&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=488&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMjUmaD0xNDAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 12. Pontos

Aqui você visualiza a tela macro da técnica de jogo, nesse caso, Pontos. Nessa tela você pode ver o core drive relacionado, a descrição da técnica de engajamento e fazer algumas modificações.

![Step 12 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/0b39fd34-a1ba-4f4e-a42a-7e566fefa0fb/5205cf6d-016f-4eb1-a002-d4ec94982c7a.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)


### 13. Módulos em Pontos

Nessa tela também você consegue adicionar módulos, de diversos tipos, a sua técnica, nesse caso Pontos. Dessa maneira você pode deixar a sua gamificação cada vez mais profunda e personalizada de acordo com o resultado que deseja alcançar.

![Step 13 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/2a9ddcb1-af0d-4ef6-83b5-4c657885e57c/72123089-5241-471b-a148-91128fddb0b6.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=993&mark-y=106&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNzQmaD03NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 14. Voltar para tela de Pontos

Por fim, ao clicar em pontos, você volta para a tela onde pode visualizar seus pontos.

![Step 14 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/bdf2b104-298c-4677-878b-405946ec8fed/02692553-561e-45ed-94e5-25f10ffea3bb.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTYmaD03NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 15. Tela Pontos

Nessa tela, como você já sabe, você pode visualizar, criar, pesquisar, editar ou excluir os seus pontos.

![Step 15 screenshot](https://images.tango.us/workflows/40c2a55b-eb03-40da-9259-653934719ef4/steps/05e4c718-0a32-42d0-b379-47a034c8435e/6086e951-336f-4f63-b785-0cecf721abf3.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.5000&fp-z=1.0054&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=283&mark-y=2&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05MDQmaD04MDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
