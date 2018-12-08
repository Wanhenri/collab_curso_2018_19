# Seletores de tag, id e class


o seletor de tag seria:
```
<nome da tag> { 
  }
```

- id

seletor:
```
#<nome dado>
```
Não pode-se repetir a mesma **id** no código
O **id** não é preso a tag

- class

seletor:
```
.<nome dado>
```
Pode-se repetir para outras tag.
A **class** é presa a tag.


- position: absolute
Cria um novo contexto

Pode-se repetir para outras tag no mesmo código/página.
A **class** é presa a tag.

# O mundo do display

- inline

<p>Deixa elementos na mesma linha;</p>
<p>não define width height;</p>

- block
<p>Ele não deixa na mesma linha;</p>
<p>É possível definir width height;</p>

- inline-block
<p>Deixa elementos na mesma linha;</p>
<p>É possível definir width height;</p>

## aula -> position absolute e porcentagem
<p>aula importante para posicionamento dos elementos. Retornar aqui sempre que necessário</p>
---
## position: absolute

<p>cria um novo contexto</p>
<p>define a largura e altura - é o conteúdo</p>

```
position: absolute;
```
top botton => eixo x
left right => eixo y

Com o top / botton e left / right consegue-se mover o objeto necessário em relação a página.

<p> Com o comando tranform:translateX vamos movimentar a quantidade do elemente que queremos.</p>
<p> Por exemplo: se queremos mover 50% do objeto para a esquerda, colocaremos -50%.

```
tranform: translateX ()
```
<p> Com o comando tranform:translateY vamos movimentar a quantidade do elemente que queremos.</p>
<p> Por exemplo: se queremos mover 50% do objeto para a cima ou baixo, colocaremos -50%.

```
tranform: translateY ()
```
