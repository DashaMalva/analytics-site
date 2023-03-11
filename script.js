'use strict';

const formSignup = document.querySelector('.signup');
const password = formSignup.querySelector('#signup__password');
const passwordRetype = formSignup.querySelector('#signup__password-retype');

const burgerButton = document.querySelector('.burger');
const menu = document.querySelector('.menu');


/**
 * Проверяет валидность введенных паролей.
 */
function checkPasswordMatch(event) {
  if (password.value.length < 1) {
    password.classList.add('error');
    event.preventDefault();
  }
  if (password.value !== passwordRetype.value) {
    password.classList.add('error');
    passwordRetype.classList.add('error');
    event.preventDefault();
  } else {
    password.classList.remove('error');
    passwordRetype.classList.remove('error');
  }
} 


/**
 * Показывает/скрывает элемент menu.
 */
function showMenu() {
  menu.classList.toggle('menu_active');
} 


formSignup.addEventListener('submit', checkPasswordMatch);

burgerButton.addEventListener('click', showMenu);

menu.addEventListener('mouseleave', showMenu);
