//! СМЕНА СТРАНИЦЫ
const selectElement = document.getElementById('pageSelect');

selectElement.addEventListener('change', function () {
  const url = this.value;
  if (url) {
    window.location.href = url;
  }
});

//! СМЕНА ЯЗЫКА
const selectLang = document.getElementById('lang');

selectLang.addEventListener('change', function () {
  const url = this.value;
  if (url) {
    window.location.href = url;
  }
})


// ! Аккордеон
const items = document.querySelectorAll('.faq__accordion-item');

items.forEach(item => {
  const header = item.querySelector('.faq__accordion-header'); // Находим header для обработки клика
  const body = item.querySelector('.faq__accordion-body'); // Находим тело

  header.addEventListener('click', () => {
    // Закрываем все активные элементы, кроме текущего
    document.querySelectorAll('.faq__accordion-item.active').forEach(activeItem => {
      if (activeItem !== item) {
        const activeBody = activeItem.querySelector('.faq__accordion-body');
        activeBody.style.maxHeight = 0;
        activeItem.classList.remove('active');
      }
    });

    // Переключаем текущий элемент
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = 0;
    }
  });
});

// ! FOOTER LANG
const footerSelectLang = document.getElementById('footer__lang');

footerSelectLang.addEventListener('change', function () {
  const footerUrl = this.value;
  if (footerUrl) {
    window.location.href = footerUrl;
  }
})


// ! BURGER
const menuIcon = document.querySelector('.menu-icon'),
  header = document.querySelector('.header'),
  main = document.querySelector('main'),
  footer = document.querySelector('.wrapper-down');
  

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active');
  setTimeout(() => header.classList.toggle('header--mobile'), 50);
  // main.classList.toggle('display-none')
  // footer.classList.toggle('display-none')
  if (main.style.display === 'none') {
    main.style.display = ''; // Возвращаем стиль к исходному состоянию
  } else {
    main.style.display = 'none'; // Скрываем элемент
  }

  if (footer.style.display === 'none') {
    footer.style.display = '';
  } else {
    footer.style.display = 'none';
  }
})

// ! MOBILE lang
const mobileSelectLang = document.getElementById('mobile__lang');

mobileSelectLang.addEventListener('change', function () {
  const mobileUrl = this.value;
  if (mobileUrl) {
    window.location.href = mobileUrl;
  }
})
