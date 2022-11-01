// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
const inputRef = document.getElementById("datetime-picker");
const startRef = document.querySelector("button");
const dateValueRef = document.querySelectorAll(".value");

startRef.setAttribute("disabled", "");

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");

};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let choiceDate = new Date(selectedDates);
        let currentDate = new Date();
        if (choiceDate.getTime() < currentDate.getTime()) {
            window.alert("Please choose a date in the future 😡");
        } else {
            startRef.removeAttribute("disabled", "");
            startRef.addEventListener("click", () => {
                let interval = setInterval(() => {
                    let date = new Date;
                    let timer = convertMs(choiceDate.getTime() - date.getTime());
                    dateValueRef[0].textContent = addLeadingZero(timer.days);
                    dateValueRef[1].textContent = addLeadingZero(timer.hours);
                    dateValueRef[2].textContent = addLeadingZero(timer.minutes);
                    dateValueRef[3].textContent = addLeadingZero(timer.seconds);
                    if (timer.days == 0 && timer.hours == 0 && timer.minutes == 0 && timer.seconds === 0) {
                        clearInterval(interval);
                    };
                }, 1000);

            });
        };
    },
};
flatpickr(inputRef, options);


console.log(flatpickr);