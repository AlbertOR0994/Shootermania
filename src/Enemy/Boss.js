class Boss extends Enemy {
    constructor(sam, parent, enemies) {
        super(60, 60, 1, 10, parent, sam, enemies, health)
        this.width = 100
        this.height = 100
        this.speed = 5
        this.health = 5
        this.sprite
        this.isDead = false
    }

    insertBoss() {

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
        if (this.x >= 0 && this.x <= 1350) {
            this.sprite.style.left = this.x + 'px'
            this.checkCollision()
        }
        else {
            this.directionX = -this.directionX
        }
        if (this.directionX == -1 && this.x >= 0) {
            this.sprite.style.transform = "rotateY(180deg)"
        }
        if (this.directionX == 1 && this.x <= 1450) {
            this.sprite.style.transform = "rotateY(360deg)"
        }

    }

    checkCollision() {
        if (this.x < (this.sam.x + this.sam.width) &&
            (this.x + this.width) > this.sam.x &&
            this.y < (this.sam.y + this.sam.height) &&
            (this.y + this.height) > this.sam.y) {
            this.sam.health -= 3
            this.checkStatus()
            const adefeat = new Audio('src/Sounds/zg-survival-defeat-sound.mp3')
            adefeat.play()
            const defeat = document.createElement('div')
            defeat.setAttribute('id', 'defeat')
            defeat.innerHTML = "<div id='dtext'>LOSER</div> <button id='end'>AGAIN?</button>"
            this.parent.appendChild(defeat)
            const rest = document.getElementById('end')
            rest.addEventListener('click', () => {
                window.location.reload()
            })
            this.sam.sprite.remove()
            return
        }

    }

    checkStatus() {
        if (this.health === 0) { this.isDead = true }
        if (this.isDead === true) {
            this.parent.removeChild(this.sprite)
            const index = this.enemies.indexOf(this);
            if (index !== -1) {
                this.enemies.splice(index, 1);
            }
            clearInterval(this.timerEnemy)

        }


    }

}

