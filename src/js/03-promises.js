function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    promise.resolve()
  } else {
    promise.reject()
  }
}

const formRef = document.querySelector("form");
const inputsRef = document.querySelectorAll("input");
const delayRef = inputsRef[0];
const stepRef = inputsRef[1];
const amountRef = inputsRef[2];
const btnRef = document.querySelector("button");

formRef.addEventListener("input", () => {
  const delayB = delayRef.value;
  const step = stepRef.value;
  const amount = amountRef.value;

  formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    for (i = 0; i <= amount; i++) {
      createPromise(i + 1, delayB)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delayB += step;
    };
  })
});

