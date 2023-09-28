---
sidebar_label: Ações
sidebar_position: 2
---

# Ações

### 1. Ações

Ação é a declaração do que os jogadores podem fazer na gamificação. Por exemplo, “vender”, “comprar”, “comentar”, “compartilhar”, “seguir”, “visitar”, “logar”, “reunir”, “ligar”, “estudar”, etc. No contexto de um cenário de vendas, por exemplo, você pode configurar uma ação "vender", que pode ter atributos adicionais como "produto" e "valor" da venda. Uma vez que você definiu quais são as ações que podem ser feitas pelos jogadores, então você pode usar estas ações na estratégia de gamificação, conectadas as várias técnicas de jogos disponíveis na plataforma. As ações podem ser configuradas através do FUNIFIER STUDIO ou pela FUNIFIER API.

  

O caminho para configuração de ações no STUDIO é: **_/studio/action_**

O endpoint para configuração de ações na API REST é: **_/v3/action_**



## # [Funifier | Gamification Solutions](https://my.funifier.com/studio/dashboard)


### 2. Criar sua primeira ação

Para criar uma Ação no Funifier Studio, depois que já tiver selecionado o projeto que deseja editar, clique em 'Crie sua primeira ação' na página principal do projeto de gamificação.

![Step 2 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/bb55a8fa-23d1-4f3c-9c66-bf955a9a3385/686a7d30-21ce-4009-bdab-8a22a85b96ca.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=327&mark-y=424&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMzMmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 3. Nova Ação

Clique 'Novo' para criar a sua Ação, você pode usar a sua criatividade e estratégia para definir qual ação deseja que o jogador execute.

![Step 3 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/a3c1f9e2-c7e7-4384-94c2-b0aea662fcf8/518ff177-c4dc-469d-bca3-e442aa6b59a5.png?crop=focalpoint&fit=crop&fp-x=0.3012&fp-y=0.2580&fp-z=2.5876&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=466&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjgmaD0xNDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 4. Ação Vender - Exemplo

A configuração de uma ação é composta de duas informações essenciais: o id e os atributos. As ações são armazenadas na coleção "action". Veja abaixo um exemplo de configuração de uma ação:

  

`# Ação vender, com atributos produto e preço`

`# POST /v3/action`

`{`

    `"_id": "sell",`

    `"active": true,`

    `"action": "Sell",`

    `"attributes": [`

        `{"name": "product","type": "String"},` 

        `{"name": "price","type": "Number"}`

    `]`

`}`

Os campos utilizados nesta configuração de ação são:

*   "\_id" : Identificador único da ação, não pode conter espaços ou caracteres especiais;
    
*   "active": Indica se este tipo de ação poderá ser executada pelos jogadores ou não;
    
*   "action": Nome amigável da ação para ser apresentado nas interfaces gráficas;
    
*   "attributes": Lista de atributos que a ação recebe quando for realizada por um jogador;
    
*   "[attributes.name](http://attributes.name)": Id do atributo, não pode conter espaços ou caracteres especiais;
    
*   "attributes.type": Tipo de dados do atributo, pode ser: String, Number, ou Boolean;



### 5. Imagem da Ação

Nesse campo você pode escolher uma imagem que melhor identifica a ação que você está configurando, você pode fazer upload de uma imagem que está no seu dispositivo, pode chamar uma URL para usar uma imagem que está na internet, ou até mesmo disfrutar das opções diversas de ícones que o próprio Funifier Studio já oferece.

![Step 5 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/d5c35674-0d77-4cf5-8847-7c63449d21f8/27992361-3cc4-4ff3-bb3f-0c7b5c52d710.png?crop=focalpoint&fit=crop&fp-x=0.3367&fp-y=0.3528&fp-z=3.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=345&mark-y=587&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTQmaD0xNjYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 6. Nome da ação 

Uma boa prática do Funifier é declarar o Nome da ação com um verbo que indique uma ação, uma palavra que indica acontecimentos representados no tempo, como uma ação, um estado, um processo ou um fenômeno. Exemplos de Nomes adequados para uma ação: construir, comprar, visualizar, ler, vender. Evite colocar o sujeito junto com o verbo nos nomes de ações, ex: “João Pescou”.

![Step 6 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/f5d4970f-81b5-480e-ab28-b28123deb8f9/51d6ac65-9a4f-4330-97f0-fa557e4cfbfe.png?crop=focalpoint&fit=crop&fp-x=0.7046&fp-y=0.3844&fp-z=1.8049&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=40&mark-y=352&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTIwJmg9MTAzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 7. Identificador da ação 

Você pode definir um identificador da sua ação, ou deixar que o Funifier Studio faça isso automaticamente de acordo com o nome da sua ação.

![Step 7 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/b6559522-70d1-4bbc-957d-eeb9f42dffae/5ae54d82-8515-4099-89de-64fb922bb3de.png?crop=focalpoint&fit=crop&fp-x=0.7046&fp-y=0.5021&fp-z=1.8049&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=40&mark-y=352&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTIwJmg9MTAzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 8. Atributos

Depois que definir o nome da ação, caso ache necessário, você pode definir os atributos da sua ação. Os atributos são informações adicionais relacionadas a ação, assim você pode dar mais profundidade e ser mais especifico quando um jogador realizar uma ação.

![Step 8 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/f6f6691a-e4db-4e9d-bd15-fcd181c3d3ff/1bcea4f5-805e-4809-abbf-963056f2aa30.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1106&mark-y=482&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 9. Atributos - Exemplo

Como exemplo, para a ação 'vender', definimos 2 atributos. O primeiro se chama 'produto', e é do tipo String, nele podemos dar nome aos tipos de produto possíveis para se vender. O segundo se chama 'valor', e é do tipo Número, nele podemos definir os preços de tais produtos.

![Step 9 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/073df32a-8f80-4135-9bb4-22b96e63cdde/16f657d0-fd40-4445-a042-adac9e827709.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=298&mark-y=364&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NzMmaD0yMTEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 10. Limites

Além disso, se achar necessário, você pode definir um limite de execução para a ação que criou.

![Step 10 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/b749aa56-c8c3-4b9a-9d7f-514bf5ccf980/1b7626a1-e8b0-40b5-8b7d-11c683d7a743.png?crop=focalpoint&fit=crop&fp-x=0.6192&fp-y=0.6001&fp-z=1.3450&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=15&mark-y=302&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTcxJmg9MjAzJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 11. Limite - Exemplo

Como exemplo, aqui definimos que a ação 'vender' pode ser executada no máximo 100 vezes, por jogador, em um período de 1 dia.

![Step 11 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/a5bce74f-e7ab-4f6f-ad88-7f6d2e043df2/3b1dbb86-c055-4ae1-ac3e-af66826faa7c.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1103&mark-y=590&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02MCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 12. Notificações

Você também consegue configurar um feedback visual para essa ação, usando as Notificações.

![Step 12 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/90a460c4-53a0-4cfd-88a2-19d5584c33b5/f98ef0da-6176-48d3-a3c4-6617310d15fd.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=308&mark-y=364&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04NjYmaD0xNDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 13. Notificações - Exemplo

Aqui como exemplo, configuramos para mostrar 'parabéns pela venda' quando o jogador executar essa ação.

![Step 13 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/b727256c-933c-4051-91d4-bb7e06bd1555/03fce426-932d-42ce-bc03-7ededb10265b.png?crop=focalpoint&fit=crop&fp-x=0.4932&fp-y=0.2099&fp-z=1.1149&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=78&mark-y=146&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDQ0Jmg9ODcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 14. Salvar

Assim que tiver tudo configurado, da maneira que desejar, na sua ação. É só apertar em Salvar.

![Step 14 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/b35fd892-c907-4137-b7df-149a2f39b1b0/8cde3461-4357-44a5-8253-b66b5338f213.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=968&mark-y=514&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xOTUmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 15. Ações

Com tudo salvo, nessa tela você pode visualizar, criar, pesquisar, editar ou excluir as suas ações.

![Step 15 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/4406b9b6-35f8-4b32-b00d-2f3b034e6da7/193ebfef-ed77-4722-9f13-d738ec5b1b9c.png?crop=focalpoint&fit=crop&fp-x=0.6146&fp-y=0.4454&fp-z=1.1321&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=192&mark-y=103&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NjkmaD02MDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 16. Ações - Exemplo

Lembre-se de que você pode configurar quantas ações a sua gamificação precisar, sua imaginação é o limite.

![Step 16 screenshot](https://images.tango.us/workflows/60a5f8b4-d284-46a4-97de-1a41eeff3d35/steps/153a708d-868b-4aae-969a-5d1ef15e50ca/820581be-7891-4939-865b-90de38523eed.png?crop=focalpoint&fit=crop&fp-x=0.6149&fp-y=0.5782&fp-z=1.3476&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=23&mark-y=121&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTU1Jmg9NTY2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 17. Logs de Ação ou Action Logs

Quando um jogador realiza uma ação, esta informação é registrada na plataforma como um log de ação. Por exemplo, quando um jogador faz uma venda de um livro por R$10, isso é um log de ação. A diferença entre ação e log de ação é a seguinte: a ação é apenas a definição do que pode ser feito; enquanto o log de ação é a execução daquela ação por um jogador. Para rodar uma gamificação você precisa enviar para o Funifier os logs de ações executadas pelos jogadores. Todas as técnicas de jogos dependem direta ou indiretamente dos logs de ações para serem acionadas. Os action logs são registrados na coleção "action\_log". Os logs de ações podem ser registrados através da FUNIFIER API.

  

O endpoint para registrar logs de ações na API REST é: **_/v3/action/log_**

  

Veja abaixo como usar a Funifier API para registrar um log de ação, para informar a plataforma, que o jogador john fez uma venda de um livro no valor de 120 reais.

  

Veja abaixo um exemplo de log de ação:

  

`# Log de Ação de uma venda de livro de 120 reais feita pelo jogador john`

`# POST /v3/action/log`

`{`

    `"actionId": "sell",` 

    `"userId": "john",` 

    `"attributes": {`

        `"product": "book",` 

        `"price": 120`

    `}`

`}`
