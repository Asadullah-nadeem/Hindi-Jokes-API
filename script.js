const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088', config)

  const data = await res.json()

  jokeEl.innerHTML = data.jokeContent
}
