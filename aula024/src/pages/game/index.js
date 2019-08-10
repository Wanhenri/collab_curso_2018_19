const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

console.log($cardsWrapper);
console.log($memoryCard);
console.log($memoryCardFront);

$root.insertAdjacentHTML("beforeend", $cardsWrapper)

