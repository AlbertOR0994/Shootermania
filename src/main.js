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

  let enemies = []
  let bullets = []

  const player = new Sam(690, 100, game, 3, 25)
  player.insertSam()

  let timerId = setInterval(() => {
    player.checkStatus()
    playerMovement()
  }, 24)

  window.addEventListener('keypress', (e) => {
    switch (e.key) {
      case 'a':
        player.directionX = -1
        player.sprite.style.transform = "rotateY(180deg)"
        break
      case 'd':
        player.directionX = 1
        player.sprite.style.transform = "rotateY(360deg)"
        break
      case 'w':
        player.directionY = -1
        break
      case 's':
        player.directionY = 1
        break
      case " ":
        let bullet = new Bullets(player.x + 20, player.y + 50, 1, game, enemies, player, bullets)
        if (player.directionX == 1) {
          bullet.direction = 1
          bullet.insertBullet()
          bullets.push(bullet)
          bullet.timerBullet = setInterval(bullet.move, 20)
        }
        else {
          bullet.direction = -1
          bullet.insertBullet()
          bullets.push(bullet)
          bullet.timerBullet = setInterval(bullet.move, 20)
        }
    }
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'd' || e.key === 'w' || e.key === 's') {
      player.directionX = 0
      player.directionY = 0
    }
  })





  function createEnemyLeft() {
    const rngY = Math.floor(Math.random() * 180)
    let enemy = new Enemy(-60, rngY, 1, 1, game, player, enemies, 0)
    enemy.insertEnemy()
    enemy.sprite.style.transform = "rotateY(180deg)"
    enemies.push(enemy)
    enemy.timerEnemy = setInterval(enemy.moveX, 8)
  }


  let timerEn = setInterval(() => {
    createEnemyLeft()
    createEnemyRight()
  }, 3000)

  function playerMovement() {
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









