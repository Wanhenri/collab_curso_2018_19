const $root = document.querySelector("#root");
const $memoryCardFront = document.createElement("article");
createMemoryCard();

const $iconC = `
<img 
    src='img/icon-c.png' 
    alt='Gueio mascote da CollabCode' 
    class='icon' 
/>
`;


$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC)