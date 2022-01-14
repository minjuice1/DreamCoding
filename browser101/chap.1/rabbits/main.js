const button = document.querySelector(".button");
const carrot = document.querySelector(".carrot");
const rabbit = document.querySelector(".rabbit");

button.addEventListener("click", e => {
  rabbit.scrollIntoView({block: 'center'});
})

