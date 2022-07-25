const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let index = 0
// 开启一个定时器实现自动轮播
let interval = setInterval(run, 2000)
function run() {
    index++
    changeImage()
}

// 平移图片
function changeImage() {
    if (index > img.length - 1) {
        index = 0
    } else if (index < 0) {
        index = img.length - 1
    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
    // 点击按钮后先关闭自动轮播的定时器 否则会不断增加新的定时器导致混论啊
    clearInterval(interval)
    // 重新设置定时器
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
}
)

leftBtn.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
}
)