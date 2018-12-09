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

**Porém não é possível configurar *width* e *height***
> Os elementos com inline não aceitam largura (width), nem altura (height), o tamanho do elemento é definido pelo conteúdo que ele contém.

Para explicar um pouco sobre o respiro colocado, criamos os seguintes **<h1>**
  
  ```
  <h1 class="title">
        Primeiro
        Segundo
        Terceiro
  </h1>
  ```
  
  No código as palavras estão separadas por um [enter], porém quando rodamos o código elas aparecem separadas por um [space] Isso acontece pelo fato de no display inline colocar um comportamento na palavra, enquanto que no 'sem inline' possuí um comportamento próprio em relação a formatação.
