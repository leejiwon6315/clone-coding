const clockContainer = document.querySelector(`.js-clock`),
  clockTitle = clockContainer.querySelector(`h1`);

function getTime() {
  const date = new Date();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${month + 1}월 ${days <= 9 ? `0${days}` : days}일 ${
    hours <= 9 ? `0${hours}` : hours
  } : ${minutes <= 9 ? `0${minutes}` : minutes} : ${
    seconds <= 9 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
