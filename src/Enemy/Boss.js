class Boss extends Enemy {
    constructor(sam, parent, enemies) {
        super(50, 50, 1, 10, parent, sam, enemies)
        this.width = 100
        this.height = 100
        this.speed = 6
        this.health = 5
        this.sprite
        this.isDead = false
    }

    insertBoss() {
        console.log(this.parent)
        const newDiv = document.createElement('div')
        newDiv.setAttribute('id', 'boss')
        newDiv.style.width = this.width + 'px'
        newDiv.style.height = this.height + 'px'
        newDiv.style.left = this.x + 'px'
        newDiv.style.top = this.y + 'px'
        newDiv.setAttribute('id', 'boss')
        this.parent.appendChild(newDiv)
        this.sprite = newDiv
        this.isDead = true
    }

    moveX() {
        this.x += this.speed * this.directionX
        if (this.x >= 0 && this.x <= 1450) {
            this.sprite.style.left = this.x + 'px'
            this.checkCollision()
        }
        else {
            this.directionX = -this.directionX
        }
    }
}

