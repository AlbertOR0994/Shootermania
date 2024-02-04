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

    let enemy = new Enemy(600, 100, board, player)
    enemy.insertEnemy()

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
        // Funcion para pausar 
        //   const intervalPause = setInterval( () => {
        //     window.addEventListener('keydown', (e) => {
        //         if (e.key === "Escape") {
        //             mPause.style.display = 'flex'
        //             reset.addEventListener('click', () => {
        //             })
        //         }
        //         window.addEventListener('keydown', (e) => {
        //             if (e.key === "Escape") {
        //                 mPause.style.display = 'none'
        //             }
        //         })
        //     })
        // }, 1000)
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

