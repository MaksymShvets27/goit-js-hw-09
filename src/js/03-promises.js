const formRef = document.querySelector("form");
const inputsRef = document.querySelectorAll("input");
const delayRef = inputsRef[0];
const stepRef = inputsRef[1];
const amountRef = inputsRef[2];
const btnRef = document.querySelector("button");

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      return Promise.resolve({ position, delay });
    } else {
      return Promise.reject({ position, delay });
    }
  }, delay);
};

formRef.addEventListener("input", () => {
  const delay = parseInt(delayRef.value);
  const step = parseInt(stepRef.value);
  const amount = parseInt(amountRef.value);

  formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    for (let i = 0; i <= amount - 1; i += 1) {
      console.log(delay, step, amount);
      createPromise(i, delay).then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay += step;
    };
  });
});

