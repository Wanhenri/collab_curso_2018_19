# Desafio

<p> Leia e faça um resumo dos seguintes pontos do </p>

[collabcode](https://medium.com/collabcode/pare-de-chutar-e-aprenda-as-propriedades-css-de-posicionamento-603154655121)

- display inline
- display block
- display inline-block
- float 
- position


### Display inline

<p> No script original dado no exemplo, os itens primeiro(laranja), segundo(verde) e terceiro(azul) estão um em baixo do outro.</p>
Com a função:  

```
display:inline;
```

Foi possível deixa-las uma do lado da outra.

**Definição simples**
> O valor inline permite que os elementos fiquem um do lado do outro -- essa é a parte simples de perceber.

Porém não é possível configurar *width* e *height*
> Os elementos com inline não aceitam largura (width), nem altura (height), o tamanho do elemento é definido pelo conteúdo que ele contém.

Para explicar um pouco sobre o respiro colocado, criamos os seguintes tag h1  
```
  <h1 class="title">
        Primeiro
        Segundo
        Terceiro
  </h1>
```
  
 <p>No código as palavras estão separadas por um [enter], porém quando rodamos o código elas aparecem separadas por um [space] Isso acontece pelo fato de no display inline colocar um comportamento na palavra, enquanto que no 'sem inline' possuí um comportamento próprio em relação a formatação.</pP

<p>Para retirar esse espaço em branco gerado pelo inline, basta colocarmos nosso código da seguinte forma:</p>

```
 <ul class="example">
        <li class="example-item example-item_first">Primeiro</li><li class="example-item example-item_second">Segundo</li><li class="example-item example-item_third">Terceiro</li>
    </ul>
```
<p>Agora sem o espaço em branco, mas deixando o código nada elegante.</p>
<p>Outra forma para retirar os espaços em branco:</p>

```
<li class="example-item example-item_first">Primeiro</li><!--
 --><li class="example-item example-item_second">Segundo</li><!--
 --><li class="example-item example-item_third">Terceiro</li>
```
<p>Mas o código não fica nada elegante, como o anterior.</p>

<p> No momendo a nossa <li> encontra-se no canto superior direito. Para deixarmos no centro podemos usar a tag:</p>

```
  text-align: center;
```

<p>O código final ficando assim:</p>

https://repl.it/@wanhenri/collabcode-display-inline


### Display block

obs.: copiando o código utilizado no 'display inline'

<p> definir a largura (width) e altura (height)</p>

```
width:33.333%; 
height: 150px;
```
Porém nenhuma mudança ocorreu.
Agora modificaremos o 

```
display:inline;
```
para

```
display: block;
```
O resultado será os blocos alinhados e com o tamanho dado para ele.
> Teoricamente as <li> deveriam ficar uma do lado da outra. Isso não acontece porque todo elemento definido como block ocupa a linha inteira, ou seja, não deixa outro elemento ocupar a mesma linha que ele. Por esse motivo os elementos HTML (<li>) ficaram um de baixo do outro.
  
Agora colocarei a margem para cada bloco.

No bloco 2, colocaremos a
```
margin-left: 40px
```
lembre-se que a <li> tem 33.333% de largura.

É isso. Só fazermos a conta, 100% - 33.333%, teremos como resultado 66.667%. Para deixarmos o layout mais próximo do desafio, basta que a segunda <li> tenha no margin-left o valor de 66.667%.

Porém, toda vez que mudar o width, teremos que modificar o margin-left. Para que isso não seja necessário, vamos colocar no li o margin-left:auto; , assim ela se ajustará de acordo com o necessário.
>  Utilizando o margin-left: auto; não precisamos mais ficar fazendo a conta para definir o valor de margin-left dessa forma a manutenção do código fica muito mais feliz.

Agora vamos centralizar o terceiro bloco.
Para que isso ocorra sem que tenhamos que mudar na largura original, podemos usar as mesmas caracteristicas utilizadas no segundo bloco.

```
margin-right: auto; 
margin-left: auto; 
```

<p>O código final ficando assim:</p>

https://repl.it/@wanhenri/collabcode-display-block

### Display inline-block

obs.: copiando o código utilizado no 'display inline' e também o mesmo que no 'display block'

Primeiramente iremos alinhar utilizando o display inline. Mas ainda não é o que queremos. Ficaram um do lado do outro, mas sem a largura (width: 25%) e altura (height: 150px).
Para que ele pegue as configurações desejadas, precisaremos utilizar o display:inline-block .

>  display: inline-block. O próprio nome (inline-block) já mostra para nós que é a junção dos comportamentos dos valores inline + block. Abaixo explicarei detalhadamente os comportamento dessa propriedade.

> Com display: inline-block nós conseguimos definir uma largura (width) e altura (height) da mesma forma que conseguimos com o display: block, esse é o único comportamento que o inline-block herda do block.

Foi acrescentado o trecho no nosso index.html

```
<p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Dolorem in laboriosam facilis a ad quisquam laudantium odit dignissimos, totam perferendis illum, nobis doloribus dolore reiciendis optio expedita, obcaecati repellat sint?
    </p>
```

> Com esse parágrafo adicionado, fica mais fácil entender o que estou querendo dizer com: "as tags que são definidas com display: inline-block ganham o comportamento de uma palavra".

Acrescentando:

```
p { 
    text-align: right; /* Criamos esse seletor */
}
```
> A propriedade text-align realmente consegue mudar o comportamento das palavras que estão dentro de um parágrafo.

**Voltando um pouco**

Utilizando o

```
text-align: right;
```
para o bloco do **li**, iremos mover para a direita o bloco todo.

Com

```
text-align: center;
```
Iremos colocar  o bloco **li** centralizado.

Com

```
text-align: justify;
```
> O text-align: justify parou de funcionar novamente. Lembra que o comportamento do justify, é justificar todas as linhas menos a última? :-)

> Como temos apenas uma linha, ela é a primeira e também a última, por isso que ela não está justificada. Para resolver esse problema precisamos adicionar uma última linha e fazer com que ela não apareça para o usuário.

Vamos acrescentar um seletor de pseudo-element **:after**

```
.example:after { /* Adicionamos esse seletor */
    content: 'Ω…¬˚∆ø¥åß';
    color: red;
}
```

> O :after adiciona um elemento dentro da tag que informamos no seletor e esse elemento sempre será o último dentro desta tag

Precisamos agora adiciona nesse pseudo-element o **display: inline-block** e também a **width: 100%** e **height: 0** .

```
.example:after {
.
.
    display: inline-block; /* Adicionando essa linha, */
    width: 100%; /* essa também */
    height: 0; /* e essa foi a última */
```
Aí sim estamos com a primeira linha justificada!

Vamos deixar o **content: ''** dessa forma para remover os simbolos; e também retirar o **color: red;**

```
  .example:after {
      content: '';
      .
      .
```

<p>O código final ficando assim:</p>

https://repl.it/@wanhenri/collabcode-display-inline-block

