/* 

1 - ter a janela (navegador / browser) na mão
2 - localizar o html
3 - Pegar o coração
4 - Pegar clique no coraçao 
5 - No instante que o usuario clicar, mostraremos um texto 'AE' na tela

*/
const $heart = document.querySelector('.-heart'); 

const $stars = document.querySelector(".-star");

$heart.addEventListener("click", handleClickHeart);


$stars.addEventListener("click", handleClickStar);

function handleClickHeart() {
    $heart.classList.toggle("-active");
  }


function handleClickStar() {
    $stars.classList.toggle("-active");
  }
