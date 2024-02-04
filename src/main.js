const start = document.getElementById('start')
const tutorial = document.getElementById('tutorial')
const pregame = document.getElementById('pre-game')
const pTutorial = document.getElementById('tutorial-image')
const closeTuto = document.getElementById('close-tutorial')
const mPause = document.getElementById('pause')
const game = document.getElementById('game')
const reset = document.getElementById('reset')

start.addEventListener('click', () => {
    pregame.remove()
    intervalPause
    game.pause()
})

tutorial.addEventListener('click', () => {
    pTutorial.style.display = 'block'

})

closeTuto.addEventListener('click', () => {
    pTutorial.style.display = 'none'
})

const intervalPause = setInterval( () => {
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            mPause.style.display = 'flex'
            reset.addEventListener('click', () => {
            })
        }
        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                mPause.style.display = 'none'
            }
        })
    })
}, 1000)







