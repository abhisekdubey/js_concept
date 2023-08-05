const btn = document.querySelector('.increament_btn');
const btnPress = document.querySelector(".increament_pressed");
const count = document.querySelector(".increament_count");

let pressedCount = 0;
let triggeredCount = 0;

// Create Debounce Function using lodash library
const debouncedCount = _.debounce(() => {
    count.innerHTML = ++triggeredCount;
}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;

    debouncedCount() // called it
})