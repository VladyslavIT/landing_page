const hourElement = document.getElementById('hour');

const minTensElement = document.getElementById('min-tens');
const minElement = document.getElementById('min');

const secTensElement = document.getElementById('sec-tens');
const secElement = document.getElementById('sec');

const hourElementTwo = document.getElementById('hour-2');

const minTensElementTwo = document.getElementById('min-tens-2');
const minElementTwo = document.getElementById('min-2');

const secTensElementTwo = document.getElementById('sec-tens-2');
const secElementTwo = document.getElementById('sec-2');

// Задаем время в секундах
let countdownSeconds = localStorage.getItem('countdownSeconds') || 26666;

// Функция для обновления таймера
function updateCountdown() {
  // Вычисляем оставшееся время
  const hours = Math.floor(countdownSeconds / 3600);

  const minutes = Math.floor((countdownSeconds % 3600) / 60);
  const minuteTens = Math.floor(minutes / 10);
  const minuteOne = minutes % 10;

  const secondsTens = Math.floor((countdownSeconds % 60) / 10);
  const secondOne = countdownSeconds % 10;

  // Обновляем элемент с таймером
  hourElement.textContent = hours;

  minTensElement.textContent = minuteTens;
  minElement.textContent = minuteOne;

  secTensElement.textContent = secondsTens;
  secElement.textContent = secondOne;
  //----------
  hourElementTwo.textContent = hours;

  minTensElementTwo.textContent = minuteTens;
  minElementTwo.textContent = minuteOne;

  secTensElementTwo.textContent = secondsTens;
  secElementTwo.textContent = secondOne;

  // Уменьшаем оставшееся время
  countdownSeconds -= 1;

  // Если время вышло
  if (countdownSeconds < 0) {
    // Останавливаем таймер
    clearInterval(countdownInterval);

    // Очищаем локальное хранилище
    localStorage.removeItem('countdownSeconds');

    // Обновляем значение таймера
    countdownSeconds = 26666;

    // Запускаем таймер заново
    startCountdown();
  }
}

// Функция для запуска таймера
function startCountdown() {
  // Обновляем таймер
  updateCountdown();

  // Запускаем интервал обновления таймера каждую секунду
  const countdownInterval = setInterval(() => {
    updateCountdown();

    // Сохраняем оставшееся время в локальное хранилище
    localStorage.setItem('countdownSeconds', countdownSeconds);
  }, 1000);
}

// Запускаем таймер при загрузке страницы
startCountdown();

const inputName = document.getElementById('input-name');
inputName.addEventListener('click', () => {
  inputName.placeholder = '';
});

inputName.addEventListener('blur', () => {
  if (!inputName.value) {
    inputName.placeholder = 'Введіть своє ім`я';
  }
});
const inputPhone = document.getElementById('input-phone');
inputPhone.addEventListener('click', () => {
  inputPhone.placeholder = '';
});

inputPhone.addEventListener('blur', () => {
  if (!inputPhone.value) {
    inputPhone.placeholder = 'Введіть номер телефону';
  }
});

const button = document.getElementById('buttonId');
const button2 = document.getElementById('buttonId-2');

const section = document.getElementById('input-section');
button2.addEventListener('click', () => {
  section.scrollIntoView({ behavior: 'smooth' });
});
button.addEventListener('click', () => {
  section.scrollIntoView({ behavior: 'smooth' });
});
// const day = document.querySelector('.time-day');
// const hour = document.querySelector('.time-hour');
// const minute = document.querySelector('.time-min');
// const second = document.querySelector('.time-sec');

// const getStorageTime = JSON.parse(localStorage.getItem('timerValue'));

// При загрузке страницы восстанавливаем значения таймера из localStorage
// window.addEventListener('load', () => {
//   if (
//     getStorageTime !== null
//   ) {
//     day.innerText = getStorageTime.valueDay < 10 ? '0' + getStorageTime.valueDay : getStorageTime.valueDay;
//     hour.innerText = getStorageTime.valueHour < 10 ? '0' + getStorageTime.valueHour : getStorageTime.valueHour;
//     minute.innerText = getStorageTime.valueMin < 10 ? '0' + getStorageTime.valueMin : getStorageTime.valueMin;
//     second.innerText = getStorageTime.valueSec< 10 ? '0' + getStorageTime.valueSec : getStorageTime.valueSec;
//   }
// });

// const targetTime = new Date().getTime() + (24 * 60 * 60 * 1000 * 2);

// function timer() {
//     const currentTime = new Date();
//   let timeDifference = targetTime - currentTime;

//   const d = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
//   const h = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
//   const m = Math.floor((timeDifference / 1000 / 60) % 60);
//   const s = Math.floor((timeDifference / 1000) % 60);

//   day.innerText = d < 10 ? "0" + d : d;
//   hour.innerText = h < 10 ? "0" + h : h;
//   minute.innerText = m < 10 ? "0" + m : m;
//   second.innerText = s < 10 ? "0" + s : s;
// }

// setInterval(timer,1000);

// const endDate = new Date().getTime() + 24 * 60 * 60 * 1000 * 2; // Устанавливаем дату окончания таймера

// function updateTimer() {
//   const now = new Date();
//   const timeDifference = endDate - now;

//   if (timeDifference <= 0) {
//     clearInterval(timerInterval);
//     return;
//   }
//   if (
//     getStorageTime !== null
//   ) {
//     day.innerText = getStorageTime.valueDay < 10 ? '0' + getStorageTime.valueDay : getStorageTime.valueDay;
//     hour.innerText = getStorageTime.valueHour < 10 ? '0' + getStorageTime.valueHour : getStorageTime.valueHour;
//     minute.innerText = getStorageTime.valueMin < 10 ? '0' + getStorageTime.valueMin : getStorageTime.valueMin;
//     second.innerText = getStorageTime.valueSec< 10 ? '0' + getStorageTime.valueSec : getStorageTime.valueSec;
//   } else {
//     const d = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
//     const h = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
//     const m = Math.floor((timeDifference / 1000 / 60) % 60);
//     const s = Math.floor((timeDifference / 1000) % 60);

//     day.innerText = d < 10 ? '0' + d : d;
//     hour.innerText = h < 10 ? '0' + h : h;
//     minute.innerText = m < 10 ? '0' + m : m;
//     second.innerText = s < 10 ? '0' + s : s;

//     // Сохраняем значения таймера в localStorage

//     const timeStorage = {valueDay: d, valueHour: h, valueMin: m, valueSec: s};
//     localStorage.setItem('timerValue',JSON.stringify(timeStorage));
//   }
// }

// const timerInterval = setInterval(updateTimer, 1000);

// // Функция для сохранения значений таймера в localStorage
// function saveTimerValuesToLocalStorage() {
//   const futureDate = getFutureDate();
//   localStorage.setItem('futureDate', futureDate.toString());
// }

// // Проверка, есть ли значения таймера в localStorage
// const storedFutureDate = localStorage.getItem('futureDate');
// if (storedFutureDate) {
//   // Если значения таймера есть, используем их
//   const futureDate = new Date(storedFutureDate);
//   const currentDate = new Date();
//   if (futureDate > currentDate) {
//     // Если сохраненная дата в будущем, обновляем таймер
//     updateTimer();
//   } else {
//     // Если сохраненная дата в прошлом, удаляем значения из localStorage
//     localStorage.removeItem('futureDate');
//     saveTimerValuesToLocalStorage();
//   }
// } else {
//   // Если значения таймера нет, сохраняем их в localStorage
//   saveTimerValuesToLocalStorage();
// }

// // Запускаем обновление таймера каждую секунду
// setInterval(updateTimer, 1000);
