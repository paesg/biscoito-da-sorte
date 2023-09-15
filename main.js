const imgCookieClosed = document.querySelector('.screen1 img');
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomPhrase = Math.round(Math.random() * 9)

const phrases = [
  "O sucesso está no horizonte, mas a jornada é o que realmente importa.",
  "Sua criatividade será a chave para abrir novas portas.",
  "A sorte favorece os audazes. Arrisque-se!",
  "A paciência é a chave para a sabedoria. Continue perseverando.",
  "Uma surpresa agradável está prestes a entrar em sua vida.",
  "Lembre-se de que cada problema contém uma oportunidade.",
  "Seu sorriso iluminará o dia de alguém hoje.",
  "Acredite em si mesmo e outros seguirão o exemplo.",
  "Aprenda com o passado, viva o presente, sonhe com o futuro.",
  "A amizade é como uma estrela cadente, rara e preciosa."
]

//eventos
screen2.querySelector('#btnOpenAgain').addEventListener('click', btnOpenAgain )
imgCookieClosed.addEventListener('click', openCookie)

//gerar frase aleatoria
function newPhrase () {
  document.querySelector('.screen2 p').innerText = phrases[randomPhrase]
}

function openCookie() {
  toggleScreen()
  newPhrase()
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function btnOpenAgain () {
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 9)
}

