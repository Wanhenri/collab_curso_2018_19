const $buttonSecond = window.document.querySelector('.-second');
const $carr = window.document.querySelector('.-last');

$buttonSecond.addEventListener("click", handleClick);

function handleClick() {
    $carr.textContent = "Carrinho(11)"
}
