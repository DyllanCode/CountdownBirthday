const countdown = () => {
  const countDate = new Date('Oct 8, 2022 03:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Como funciona ?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Calculando
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".dia").innerText = textDay;
  document.querySelector(".hora").innerText = textHour;
  document.querySelector(".min").innerText = textMinute;
  document.querySelector(".seg").innerText = textSecond;
};

setInterval(countdown, 1000);

const btnMore = document.querySelector('#openModal');
const windowEmail = document.querySelector('#afterClick');

btnMore.addEventListener('click', showbox);
function showbox() {
  windowEmail.classList.remove('visual')
}
document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'
  if(isEscKey) {
    windowEmail.classList.add('visual')
  }
})

const btn = document.querySelector("#emailSend");

btn.addEventListener("click", function(e) {
  e.preventDefault();
  const email = document.querySelector("#emailUser");
  const value = email.value;

  console.log(value);
})