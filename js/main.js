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
  const userLoginObj = {
    username: formEl.elements.login.value,
    password: formEl.elements.password.value,
  };
  console.log('userLoginObj ===', userLoginObj);
  sendLoginFetch(userLoginObj);
}

async function sendLoginFetch(userDataObj) {
  const resp = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(userDataObj),
  });
  console.log('resp ===', resp);
  if (resp.ok) {
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    alert('login success');
    // redirect
    window.location.href = 'user-page.html';
    return;
  }
  const errorResponseMessage = await resp.text();
  alert(errorResponseMessage);
}
