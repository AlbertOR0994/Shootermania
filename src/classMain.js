class Main {
  constructor(parent) {
    this.width = 90
    this.height = 20
    this.parent = parent
    this.sprite
    this.enemies = []
    this.player 
    this.bullets = []
    this.insertGame = this.insertGame.bind(this)
    this.counter = 0
  }




  insertGame() {
    console.log(this.parent)
    let juego = document.createElement('div')
    juego.setAttribute('id', 'game')
    juego.style.width = this.width + 'em'
    juego.style.height = this.height + 'em'
    this.parent.appendChild(juego)
  }


  start() {
    const tutorial = document.getElementById('tutorial')
   const pTutorial = document.getElementById('tutorial-image')
   const closeTuto = document.getElementById('close-tutorial')
   const mPause = document.getElementById('pause')
   const reset = document.getElementById('reset')
    const start = document.getElementById('start')
    const pregame = document.getElementById('pre-game')
    const game = document.getElementById('game')
   


    start.addEventListener('click', () => {
      pregame.remove()

      this.player = new Sam(690, 100, game, 3, 25)
      this.player.insertSam()
      this.intervalSpawn()

      window.addEventListener('keypress', (e) => {
        switch (e.key) {
          case 'a':
            this.player.directionX = -1
            this.player.sprite.style.transform = "rotateY(180deg)"
            break
          case 'd':
            this.player.directionX = 1
            this.player.sprite.style.transform = "rotateY(360deg)"
            break
          case 'w':
            this.player.directionY = -1
            break
          case 's':
            this.player.directionY = 1
            break
        }
      })
      window.addEventListener('keyup', (e) => {
        
          if (e.key === ' ') {
            let bullet = new Bullets(this.player.x + 20, this.player.y + 50, 1, game, this.enemies, this.player, this.bullets)
            if (this.player.directionX == 1) {
              bullet.direction = 1
              bullet.insertBullet()
              this.bullets.push(this.bullets)
              bullet.timerBullet = setInterval(bullet.move, 30)
              

            }
            else {
              bullet.direction = -1
              bullet.insertBullet()
              this.bullets.push(this.bullets)
              bullet.timerBullet = setInterval(bullet.move, 30)
            }
          }
        })

       window.addEventListener('keydown', (e) => {
          if (e.key === 'a' || e.key === 'd' || e.key === 'w' || e.key === 's') {
            this.player.directionX = 0
            this.player.directionY = 0
          }
        })

      setInterval(() => {
        this.player.checkStatus()
        this.player.moveX()
        this.player.moveY()
        
        
      }, 24)
    })
  }

  

  createEnemyLeft() {
    const game = document.getElementById('game')
    const rngY = Math.floor(Math.random() * 180)
    
    let enemy = new Enemy(-5, rngY, 1, 1, game, this.player, this.enemies)
    enemy.insertEnemy()
    enemy.sprite.style.transform = 'rotateY(180deg)'
    this.enemies.push(enemy)
    enemy.timerEnemy = setInterval(() => {
      enemy.moveX()
      
     
      

         
} ,8)
     
      
   
    
  }

  createEnemyRight() {
    const game = document.getElementById('game')
    const rngY = Math.floor(Math.random() * 180)
    let enemy = new Enemy(1380, rngY, -1, 1, game, this.player, this.enemies )
    enemy.insertEnemy()
    this.enemies.push(enemy)
    enemy.timerEnemy = setInterval(enemy.moveX, 8)
    
    
  }
  intervalSpawn(){
    setInterval( () => {
      this.createEnemyRight()
      this.createEnemyLeft()
      this.conditionalEnd()
    }, 3000)
  } 

  conditionalEnd() {
    const game = document.getElementById('game')
    if (this.counter <=0 && this.player.score >= 500 ){
      let boss = new Boss(this.player, game, this.enemies)
      boss.insertBoss() 
      this.enemies.push(boss)
      boss.timerEnemy = setInterval(() => {
        boss.moveX()

      }, 8)
      this.counter++   
    }
  }
}



const main = document.getElementById('main')
const game = new Main(main)

game.insertGame()
game.start()

