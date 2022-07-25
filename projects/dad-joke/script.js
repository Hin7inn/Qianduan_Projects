const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',getJoke)

getJoke()

// async/await
async function getJoke(){
    const config = {
        headers:{
            Accept:'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',config)
    const data = await res.json()

    joke.innerHTML = data.joke
}

//  .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }