const start = document.getElementById('start')
const tutorial = document.getElementById('tutorial')
const pregame = document.getElementById('pre-game')
const pTutorial = document.getElementById('tutorial-image')
const closeTuto = document.getElementById('close-tutorial')
const mPause = document.getElementById('pause')
const game = document.getElementById('game')
const reset = document.getElementById('reset')

const started = start.addEventListener('click', () => {
    pregame.remove()

    const player = new Sam(690, 100,game, 3, 25)
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
      let timerId = setInterval(() => {
        playerMovement()
      }, 24)
     
      let enemies = []

      function createEnemy(){
        const rngY = Math.floor(Math.random() * 170 )
        let enemy = new Enemy(-60,rngY,1,game,player)
        enemy.insertEnemy()
        const timerEn = setInterval(enemy.moveX,24)
        enemies.push(enemy)
        
    }
      let timerEnemy = setInterval(createEnemy ,2500)

    function playerMovement(){
      player.moveX()
      player.moveY()
    }
    intervalPause
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
                window.location.reload()
            })
        }
        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                mPause.style.display = 'none'
            }
        })
    })
}, 1000)







