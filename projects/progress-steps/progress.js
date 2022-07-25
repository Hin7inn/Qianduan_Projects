const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',()=>{
    currentActive++
    // 当前active大于circles个数时
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click',()=>{
    currentActive--
    // 当前active小于1时
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})


function update(){
    circles.forEach((circle,index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    //收集已激活的元素个数 
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}