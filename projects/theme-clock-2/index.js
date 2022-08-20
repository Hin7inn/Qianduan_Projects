const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

function setTimes() {
    const time = new Date()
    const hours = time.getHours()
    const hoursDegrees = ((hours / 12) * 360)
    const minutes = time.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360)
    const seconds = time.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360)   

    hourEl.style.transform = `rotate(${hoursDegrees}deg)`
    minuteEl.style.transform = `rotate(${minutesDegrees}deg)`
    secondEl.style.transform = `rotate(${secondsDegrees}deg)`
}
setTimes()
setInterval(setTimes,1000)