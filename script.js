const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();
  console.log(now);
  const getSecond = now.getSeconds();
  const getMinutes = now.getMinutes();
  const getHours = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinutes / 60) * 360;
  const hourDegree = (getHours / 12) * 360;
  console.log(secondDegree);
  second.style.transform = `rotate(${secondDegree}deg)`;
  second.style.transition = "all .5s";
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
