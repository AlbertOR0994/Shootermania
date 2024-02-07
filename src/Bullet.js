class Bullets {
    constructor(x, y, direction, parent, enemies, sam, bullets) {
        this.x = x
        this.y = y
        this.direction = direction
        this.parent = parent
        this.enemies = enemies
        this.sam = sam
        this.bullets = bullets
        this.speed = 12
        this.width = 5
        this.height = 5
        this.sprite
        this.timerBullet
        this.move = this.move.bind(this)
    }

    insertBullet() {
        let newbullet = document.createElement('div')
        newbullet.classList.add('bullet')
        newbullet.style.top = this.y + 'px'
        newbullet.style.left = this.x + 'px'
        newbullet.style.width = this.width + 'px'
        newbullet.style.height = this.height + 'px'
        this.parent.appendChild(newbullet)
        this.sprite = newbullet
        const bala = new Audio('src/Sounds/pew-pew-disparo.mp3')
        bala.preload = "auto"
        bala.play()
    }

    move() {
        
        this.x += this.speed * this.direction
        this.sprite.style.left = this.x + 'px'
        this.checkCollision()
        if (this.x > 1450 || this.x <= 0) {
            this.removeBullet()
        }

    }

    getScore () {
        this.sam.score += 100
        const score = document.getElementById('score')
        score.innerText = `${this.sam.score} Score`

    }

    removeBullet() {
        this.parent.removeChild(this.sprite)
        clearInterval(this.timerBullet)
        const index = this.bullets.indexOf(this.sprite);
        if (index !== -1) {
            this.bullets.splice(index, 1);
        }
    }
    checkCollision() {
        for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i];
            if (this.x < (enemy.x + enemy.width) &&
                (this.x + this.width) > enemy.x &&
                this.y < (enemy.y + enemy.height) &&
                (this.y + this.height) > enemy.y) {
                enemy.removeEnemy();
                this.getScore()
                this.removeBullet();
                
            }
        }
    }
}  