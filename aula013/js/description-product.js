/* 

1 - ter a janela (navegador / browser) na mão
2 - localizar o html
3 - Pegar o coração
4 - Pegar clique no coraçao 
5 - No instante que o usuario clicar, mostraremos um texto 'AE' na tela

*/

const $heart = window.document.querySelector('.-heart'); 


$heart.addEventListener("click", handleClick);

function handleClick() {
    console.log('ae');
}
