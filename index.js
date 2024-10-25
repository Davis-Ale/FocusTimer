const buttonplay = document.querySelector(".play");
const buttonpause = document.querySelector(".pause");
const buttonstop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonsoundon = document.querySelector(".sound-on");
const buttonsoundoff = document.querySelector(".sound-off");

buttonplay.addEventListener("click", function () {
  buttonplay.classList.add("hide");
  buttonpause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonstop.classList.remove("hide");
});

buttonpause.addEventListener("click", function () {
  buttonpause.classList.add("hide");
  buttonplay.classList.remove("hide");
});

buttonstop.addEventListener('click', function() {
  buttonplay.classList.remove('hide')
  buttonpause.classList.remove('hide')
  buttonSet.classList.remove('hide')
  buttonstop.classList.add('hide')
  
})

buttonsoundoff.addEventListener("click", function () {
  buttonsoundon.classList.remove("hide")
  buttonsoundoff.classList.add("hide")
})

buttonsoundon.addEventListener("click", function () {
  buttonsoundon.classList.add("hide")
  buttonsoundoff.classList.remove("hide")
})