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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // spaceBetween: 10,
  speed: 500,
});

const inputName = document.getElementById('input-name');

inputName.addEventListener('input', () => {
  const nameValue = inputName.value.trim();
  if (nameValue.length < 3 || nameValue.length > 16) {
    inputName.setCustomValidity(
      'Ім`я має бути не менше 3 і не більше 16 символів'
    );
  } else if (!/^[a-zA-Zа-яА-ЯёЁ\s]*$/.test(nameValue)) {
    inputName.setCustomValidity('Спеціальні символи не допускаються');
  } else {
    inputName.setCustomValidity('');
  }
});

inputName.addEventListener('click', () => {
  inputName.placeholder = '';
});

inputName.addEventListener('blur', () => {
  if (!inputName.value) {
    inputName.placeholder = 'Введіть своє ім`я';
  }
});
const inputPhone = document.getElementById('input-phone');

const maskOptions = {
  mask: '+{38} (000)-000-00-00',
};
const mask = IMask(inputPhone, maskOptions);

inputPhone.addEventListener('input', () => {
  const phoneValue = inputPhone.value.trim();
  if (phoneValue.length < 19) {
    inputPhone.setCustomValidity(
      'Будь ласка, введіть коректний номер телефону'
    );
  } else {
    inputPhone.setCustomValidity('');
  }
});

inputPhone.addEventListener('click', () => {
  inputPhone.placeholder = '';
});

inputPhone.addEventListener('blur', () => {
  if (!inputPhone.value) {
    inputPhone.placeholder = 'Введіть номер телефону';
  }
});

async function sendData() {
  const data = {
    name: inputName.value,
    phone: inputPhone.value,
  };

  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      Notiflix.Notify.success('Дані надіслані, дякую!', {
        timeout: 5000,
        position: 'center-top',
      });
      console.log(result);
    } else {
      Notiflix.Notify.failure('Сталася помилка при надсиланні даних');
    }
  } catch (error) {
    console.error('Ошибка при отправке запроса', error);
  }
}

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  await sendData();
  form.reset();
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
