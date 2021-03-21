const clock = document.querySelector(".js-clock").querySelector("h1");

function showClock() {
    let [hour, minute, second, daynight] = new Date()
        .toLocaleTimeString("en-US")
        .split(/:| /);
    clock.innerHTML = `${hour}:${minute}:${second} ${daynight}`;
}

function init() {
    showClock();
    setInterval(showClock, 1000);
}
init();
