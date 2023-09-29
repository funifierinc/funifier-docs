---
sidebar_position: 5
---

# Leaderboard


### 1. Leaderboards

Leaderboard ou Placar de Líderes, também conhecidos como Ranking, é uma técnica de gamificação usada para classificar jogadores com base seus comportamentos ou resultados. Os Leaderboards tem como objetivo motivar as pessoas, mas se utilizados incorretamente, podem produzir o efeito contrário. Se você entra em um website gamificado e depois de algumas horas recebe 25 pontos, e depois você vê no ranking dos 10 primeiros, que o jogador na posição 10 já tem 120.000.000 pontos, isso provavelmente não irá te motivar a seguir adiante. Neste caso você pode pensar em apresentar um leaderboard com os melhores jogadores da semana ou do mês e assim manter os novos jogadores motivados. A melhor maneira de efetivamente utilizar um placar para motivar os jogadores é garantir que o jogador possa identificar rapidamente que ações os levam a subir no ranking. Se não houver chance de conquista, não há ação. A Plataforma Funifier permite a configuração de vários modelos diferentes de leaderboards, com diferentes formas de cálculo dos leaders e diferentes formas de apresentação dos seus leaderboards. Ao final deste guia você terá aprendido como gerar praticamente qualquer tipo de leaderboard usando as soluções de gamificação Funifier.

O caminho para configuração de Leaderboards no STUDIO é: **_/studio/leaderboard_**

O endpoint para configuração de Leaderboards na API REST é: **_/v3/leaderboard_**



## # [Funifier | Gamification Solutions](https://my.funifier.com/studio/level?technique=GT85)


### 2. Leaderboards

No menu lateral do Funfier Studio, clique em Técnicas de jogos para visualizar as possibilidades de técnicas de engajamento.

![Step 2 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/6d108ce1-0462-4fd8-af0f-d1312deabbb8/a2fa16fc-082f-4b6a-a5e6-e86f67b86854.png?crop=focalpoint&fit=crop&fp-x=0.1197&fp-y=0.5760&fp-z=1.8770&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=8&mark-y=330&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjQmaD05MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 3. Leaderboard

Clique em Leaderboard para entrar na aba de configuração dessa técnica.

![Step 3 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/3c94e134-ae88-42a1-b4ca-f3af1c158815/a41e0173-3142-457b-90c0-2b3d6a7c0aa7.png?crop=focalpoint&fit=crop&fp-x=0.4358&fp-y=0.6916&fp-z=2.9228&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=526&mark-y=307&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDgmaD0xMzYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 4. Novo

Clique em novo para criar um Leaderboard. Nesse exemplo, vamos criar um Leaderboard de jogadores com a maior quantidade de pontos.

![Step 4 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/b43eef81-7025-4d9f-bffc-d76ff46ac58c/4692d24c-f3d3-4dfd-9080-d0caecaa8570.png?crop=focalpoint&fit=crop&fp-x=0.3012&fp-y=0.2580&fp-z=2.5876&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=466&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjgmaD0xNDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 5. Preencha as informacoes

Comece preenchendo as informações para ajustar o seu Leaderboard da maneira que preferir. Primeiro. Insira o titulo e a descrição do seu Leaderboard. Defina se o Leaderboards vai classificar Jogadores ou Equipes. Agora, defina como vai funcionar a classificacao do seu Leaderboard, tendo em vista que:  
**Sort:** Define a ordem de classificação dos líderes. “With more” indica a ordem decrescente do maior para o menor. “With less” indica a ordem crescente do menor para o maior.

**Type** : Indica como e qual informação deverá ser agrupada. O leaderboard pode ser baseado em ações ou conquistas. Para encontrar a quantidade total de conquistas dos jogadores nós utilizamos “Sum achievements”. Existem outras duas opções de tipo de operação que veremos mais adiante são elas “Count actions” e “Sum attributes” ambas relacionadas ao agrupamento de ações dos jogadores.

Dessa forma, quando você definir o seu Type, conseguirá visualizar as funcionalidades que melhor se encaixam para você definir o que deseja contabilizar. Como no exemplo abaixo.

![Step 5 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/e9df7acc-8089-4f9f-9fb8-12dd4f1d6ee3/1ce1406d-ed99-4b77-b3dd-5657bd645d82.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=296&mark-y=87&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NzEmaD01NzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 6. Configurando Leaderboard - Exemplo

Esse é um Leaderboard que classifica os Melhores Vendedores, ele classifica Jogadores. Ele classifica do Maior para o Menor, ele classifica a quantidade total de conquistas dos jogadores, com base na ação "vender", e para isso ele usa o atributo "Valor". Resumindo, vai classificar do maior para o menor, valor em vendas de cada Jogador.

![Step 6 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/f92692e8-c0f0-423e-b5c7-2e26c6857e11/66e70bf5-1824-4dd8-af07-5d34895c7df9.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.5000&fp-z=1.0054&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=283&mark-y=2&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05MDQmaD04MDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 7. Período do Leaderboard

Além da operação, é importante definimos um período de fvigecia das clasisficacoes do nosos Leaderboard. Para isso, leve em consideração esses conceitos:

**Type**: Indica se o período de apuração do leaderboard deve ser variável “Variable” ou fixo “Fixed”. Para o tipo variável você precisa definir uma periodicidade definida por uma quantidade de tempo. Para o tipo fixo você define a data inicial e final de apuração do resultado.

**Amount**: Para o período variável você deve definir uma quantidade de tempo. O campo time amount funciona junto com o campo time scale. O time amount define a quantidade de tempo.

Scale: Para o período fixo você deve definir uma quantidade de tempo. O campo time amount funciona junto com o campo time scale. O time scale define a unidade de tempo por exemplo Dia, Semana, Mês etc.

![Step 7 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/a022278c-aa7a-4677-a718-e36b4cdcd62d/8e59b1d3-1347-4c4f-8092-9f37e946916f.png?crop=focalpoint&fit=crop&fp-x=0.6110&fp-y=0.5054&fp-z=1.3333&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=22&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTU1Jmg9MTUwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 8. Salvar

Quando tiver concluído a configuração da maneira que mais fizer sentido para o seu projeto gamificado, clique em 'Salvar' para adicionar esse Leaderboard ao Funifier Studio.

![Step 8 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/22739b85-b6b2-4053-a429-6058d2610f2d/f6c47a3e-0937-4e3c-9bdd-179053b6967f.png?crop=focalpoint&fit=crop&fp-x=0.8883&fp-y=0.7088&fp-z=3.0724&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=488&mark-y=319&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02MDAmaD0xNzAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 9. Leaderboards

Aqui você consegue visualizar, adicionar, editar, excluir e pesquisar todos os Leaderboards. Para enxergar como esta a classificação desse Leaderboard, clique em "Lideres"

![Step 9 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/b8d0defb-5606-4d77-8f93-ec9ea868517f/8b6638f1-bd86-4829-a753-9004b0064542.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1008&mark-y=426&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xMDImaD00NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 10. Lideres

Aqui em Lideres ou Leaders, você consegue acompanhar como está a classificação dos jogadores, dentro desse Leaderboard, a quantidade de pontos de cada membro, e fazer algumas alterações.

![Step 10 screenshot](https://images.tango.us/workflows/18ce49d6-da6c-4a7b-ba19-f1bd55acf334/steps/a44a8b39-7a71-4f4d-b21e-302c3a82d045/cda0ea2f-1fcb-41d8-98fb-c4a24df4328d.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.4454&fp-z=1.1321&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=192&mark-y=103&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NjkmaD02MDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
