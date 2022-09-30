

const buttonsRef = document.querySelectorAll('button');
const buttonStart = buttonsRef[0];
const buttonStop = buttonsRef[1];
const bodyRef = document.querySelector('body');



buttonStart.addEventListener('click', () => {
    buttonStart.setAttribute("disabled", "");
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
    const BGDcolor = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStop.addEventListener('click', () => {
        buttonStart.removeAttribute("disabled", "");
        clearInterval(BGDcolor);
    });
});

