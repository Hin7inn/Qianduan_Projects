
function AudioPlay(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if (!audio) return  // 不是页面所用键位则跳出该函数
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
}

function transitionStop(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
console.log(keys);
keys.forEach(key =>
    // 过渡效果结束事件
    key.addEventListener('transitionend', transitionStop)
)
window.addEventListener('keydown', AudioPlay)