const btns = document.getElementsByClassName('button')
console.log(btns)

// 微信跳转页面
btns[0].addEventListener('click',()=>{
    window.location.href = 'https://weixin.qq.com/'
})

// 推特跳转页面
btns[1].addEventListener('click',()=>{
    window.location.href = 'https://twitter.com/'
})

// github跳转页面
btns[2].addEventListener('click',()=>{
    window.location = 'https://github.com/'
})

// youtube跳转页面
btns[3].addEventListener('click',()=>{
    window.location = 'https://youtube.com/'
})

// ins跳转页面
btns[4].addEventListener('click',()=>{
    window.location = 'https://www.instagram.com/'
})