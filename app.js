const signUpBtn = document.querySelector('#signUp');
const signInBtn = document.querySelector('#signIn');
const container1 = document.querySelector('.form-container1');
const container2 = document.querySelector('.form-container2');

signUpBtn.addEventListener('click', () => {
  container2.classList.add('active');
  container1.classList.add('inactive');
});

signInBtn.addEventListener('click', () => {
  container2.classList.remove('active');
  container1.classList.remove('inactive');
});
