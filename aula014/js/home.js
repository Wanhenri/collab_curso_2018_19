let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleClick);


function handleClick() {
    const $carrinho = document.querySelector('.-last');
    // Fazem a mesma coisa;
    // valorInicial = valorInicial + 1; 
    // valorInicial += 1;
    // valorInicial++;

    // template string
    // $carrinho.textContent = 'Carrinho (' + ++valorInicial + ')';
    $carrinho.textContent = `Carrinho (${++valorInicial})`;
}

