const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    // 创建小方块元素节点
    const square = document.createElement('div')

    // 利用节点给小方块添加属性(类名)和事件(鼠标移入移出)
    square.classList.add('square')
    square.addEventListener('mouseenter', () => addColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    // 将节点插入容器中
    container.appendChild(square)
}

// 鼠标移入载入颜色
function addColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}
// 鼠标移出移除颜色
function removeColor(element) {
    element.style.background = 'rgb(29, 29, 29)'
    element.style.boxShadow = '0 0 2px #000'
}

// 随机颜色
function getRandomColor() {
    // Math.floor 返回小于或等于一个给定数字的最大整数(向下取整)
    // Math.random 返回一个浮点数， 伪随机数在范围从0 到小于1
    return colors[Math.floor(Math.random() * colors.length)]
}