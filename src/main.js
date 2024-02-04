const start = document.getElementById('start')
const tutorial = document.getElementById('tutorial')
const pregame = document.getElementById('pre-game')
const pTutorial = document.getElementById('tutorial-image')
const closeTuto = document.getElementById('close-tutorial')
let board = document.getElementById('game')



start.addEventListener('click', () => {
    pregame.remove()

    let player = new Sam(690, 100, board, 3, 25)
    player.insertSam()

    window.addEventListener('keydown', (e) => {
        switch(e.key){
          case 'a':
            player.directionX = -1
            break
          case 'd':
            player.directionX = 1
            break
        case 'w':
            player.directionY = -1
            break
        case 's':
            player.directionY = 1
            break
          }
      })
      
    window.addEventListener('keyup', (e) => {
        if(e.key === 'a' || e.key === 'd' || e.key === 'w' || e.key === 's'){
          player.directionX = 0
          player.directionY = 0
        }
      })
      let timerId = setInterval(playerMovement, 24)
    
    function playerMovement(){
      player.moveX()
      player.moveY()
    }
})

tutorial.addEventListener('click', () => {
    pTutorial.style.display = 'block'

})

closeTuto.addEventListener('click', () => {
    pTutorial.style.display = 'none'
})

