const input = document.getElementById('input')
const form = document.getElementById('form')
const todoList = document.getElementById('todos')

// 如果本地存储中有todo事件则载入到todos中
const todos = JSON.parse(localStorage.getItem('todos'))

// 将本地存储的todos渲染至页面
if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    // 阻止表单默认动作
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    // 先判断有无本地存储的todoList
    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        // 已完成
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            // toggle给dom元素添加或者消除类
            todoEl.classList.toggle('completed')
            updateLS()
        })

        // contextmenu右键菜单
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todoList.appendChild(todoEl)
        input.value = ''
        updateLS()
    }
}

// 更新本地存储
function updateLS() {
    todoEl = document.querySelectorAll('li')
    const todos = []
    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}