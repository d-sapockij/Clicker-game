const timer = document.querySelector('#display')
const button = document.querySelector('#button')
const counter = document.querySelector('#counter')

const TIME = 5000
const DELTA = 100

console.log(timer, button, counter)

button.onclick = start

function start() {
    let score = 0
    let time = 0
    counter.textContent = score
    timer.textContent = formatTime(TIME)
    button.textContent = 'Click'

    let interval = setInterval(() => {
        timer.textContent = formatTime(TIME - time)
        time += DELTA
    }, DELTA)
    
    button.onclick = () => {
        counter.textContent = ++score
    }

    setTimeout(() => {
        button.onclick = null
        clearInterval(interval)
        timer.textContent = 'Game Over'
        button.textContent = 'Again?'

        setTimeout(() => {
            button.onclick = start
        }, 500)

    }, TIME)
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}
