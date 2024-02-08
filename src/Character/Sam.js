class Sam {
  constructor(x, y, parent, health, bullet) {
    this.x = x
    this.y = y
    this.health = health
    this.speed = 5
    this.bullet = bullet
    this.timerId = null
    this.sprite
    this.parent = parent
    this.directionX = 0
    this.directionY = 0
    this.width = 75
    this.height = 75
    this.isDead = false
    this.score = 0
  }

  insertSam() {
    let newPlayer = document.createElement('div')
    newPlayer.setAttribute('id', 'sam')
    newPlayer.style.width = this.width + 'px'
    newPlayer.style.height = this.height + 'px'
    newPlayer.style.top = this.y + 'px'
    newPlayer.style.left = this.x + 'px'
    this.parent.appendChild(newPlayer)
    this.sprite = newPlayer
  }

  // Movimiento horizontal
  moveX() {
    let nextX = this.x + this.speed * this.directionX
    if (nextX >= 0 && nextX <= 1390) {
      this.x += this.speed * this.directionX
      this.sprite.style.left = this.x + 'px'
    }
  }
  // Movimiento vertical
  moveY() {
    let nextY = this.y + this.speed * this.directionY
    if (nextY >= -45 && nextY <= 800) {
      this.y += this.speed * this.directionY
      this.sprite.style.top = this.y + 'px'
    }

  }

  checkStatus() {
    const lifes = document.getElementById('health')
    const main = document.getElementById('main')
    lifes.innerText = `${this.health} LIFES`
    if (this.health <= 0) {
      this.isDead = true
    }
  }
  // Disparar a un enemigo
  shootEnemy() {
    const shoot = document.createElement('div')
    shoot.setAttribute('class', 'shoot')
  }

}