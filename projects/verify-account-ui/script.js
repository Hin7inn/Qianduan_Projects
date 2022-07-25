// 只能输入数字0~9 输入合法自动跳转下一格
const codes = document.querySelectorAll('.code')

// 自动获取第一个数字焦点
codes[0].focus()

codes.forEach((code,index) => {
    code.addEventListener('keydown',(e)=>{
        if(e.key >= 0 && e.key <= 9){
            codes[index].value = ''
            setTimeout(()=> codes[index + 1].focus(),10)
        }else if(e.key === 'Backspace'){
            setTimeout(()=> codes[index - 1].focus(),10)
        }
    })
})