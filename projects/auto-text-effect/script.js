const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We all Love this fxxking Football,Right?'

let index = 1
let speed = 300 / speedEl.value

writeText()
/**
 * setInterval() 方法可按照指定的周期(以毫秒计)来调用函数或计算表达式。
    setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

    setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
    setTimeout 方法接收两个参数，第一个参数为回调函数函数或字符串，第二个参数为触发时间(单位：毫秒)
 */
function writeText() {
    textEl.innerText = text.slice(0, index)
    index++

    if (index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)