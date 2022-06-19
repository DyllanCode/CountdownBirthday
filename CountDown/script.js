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

