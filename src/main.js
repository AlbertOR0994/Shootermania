const start = document.getElementById('start')
const tutorial = document.getElementById('tutorial')
const pregame = document.getElementById('pre-game')
const pTutorial = document.getElementById('tutorial-image')
const closeTuto = document.getElementById('close-tutorial')

start.addEventListener('click', () => {
    pregame.remove()
})

tutorial.addEventListener('click', () => {
    pTutorial.style.display = 'block'

})

closeTuto.addEventListener('click', () => {
    pTutorial.style.display = 'none'

})