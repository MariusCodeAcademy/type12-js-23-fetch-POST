'use strict';
console.log('main.js');

//  nusitaikom
const formEl = document.forms[0];
const loginEl = document.getElementById('login');
const passwordEl = document.getElementById('password');

formEl.addEventListener('submit', formSubmitHandler);

/**
 *
 * @param {SubmitEvent} event
 */
function formSubmitHandler(event) {
  event.preventDefault();
  // surikti formos inputus i viena objekta ir iskonsolinti
}
