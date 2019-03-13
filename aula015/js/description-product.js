
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
