import Notiflix from 'notiflix';
const formRef = document.querySelector("form");
const inputsRef = document.querySelectorAll("input");
const delayRef = inputsRef[0];
const stepRef = inputsRef[1];
const amountRef = inputsRef[2];
const btnRef = document.querySelector("button");

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
  });
};

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  let delay = parseInt(delayRef.value);
  let step = parseInt(stepRef.value);
  let amount = parseInt(amountRef.value);
  let i = 1
  for (i; i <= amount; i += 1) {
    // console.log(delay, step, amount, i);
    createPromise(i, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  };
});

