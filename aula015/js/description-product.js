
const $heart = document.querySelector('.-heart'); 
const $stars = document.querySelectorAll('.star');


$heart.addEventListener("click", handleClick);
$stars.forEach(function($star) {
  
  $star.addEventListener('click',handleClick);
});


function handleClick() {
    this.classList.toggle("-active");
  }

  $stars.forEach(function($star, itemSelected) {
    $star.addEventListener("click", starSelected);
  
    function starSelected() {
      $stars.forEach(function(star, index) {
        if (itemSelected >= index) {
          star.classList.add("-active");
        } else {
          star.classList.remove("-active");
        }
      });
    }
  });
