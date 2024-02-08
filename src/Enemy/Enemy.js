class Enemy {
    constructor(x, y, directionX, health, parent, sam, enemies) {
        this.x = x
        this.y = y
        this.health = health
        this.speed = 3
        this.parent = parent
        this.sam = sam
        this.timerId = null
        this.sprite
        this.directionX = directionX
        this.width = 75
        this.height = 75
        this.timerEnemy
        this.enemies = enemies

        this.moveX = this.moveX.bind(this)

    }

    insertEnemy() {
        const newEnemy = document.createElement('div')
        newEnemy.classList.add('enemy')
        newEnemy.style.left = this.x + 'px'
        newEnemy.style.top = this.y + 'px'
        newEnemy.style.width = this.width + "px"
        newEnemy.style.height = this.height + "px"
        this.parent.appendChild(newEnemy)
        this.sprite = newEnemy
    }
    moveX() {
        this.x += this.speed * this.directionX
        if (this.x >= -10 && this.x <= 1390) {
            this.sprite.style.left = this.x + 'px'
            this.checkCollision()
        }
        else {
            this.removeEnemy()
        }
    }
    removeEnemy() {

        this.parent.removeChild(this.sprite)
        const index = this.enemies.indexOf(this);
        if (index !== -1) {
            this.enemies.splice(index, 1);
        }

        clearInterval(this.timerEnemy)
    }
    checkCollision() {

        if (this.x < (this.sam.x + this.sam.width) &&
            (this.x + this.width) > this.sam.x &&
            this.y < (this.sam.y + this.sam.height) &&
            (this.y + this.height) > this.sam.y) {

            this.sam.health -= 1
            this.removeEnemy()
            const samHitted = new Audio('src/Sounds/terraria-male-player-hurt-sound.mp3')
            samHitted.volume = 1
            samHitted.play()

            if (this.sam.health == 0) {

                const adefeat = new Audio('src/Sounds/zg-survival-defeat-sound.mp3')
                adefeat.play()
                const defeat = document.createElement('div')
                defeat.setAttribute('id', 'defeat')
                defeat.innerHTML = "<div id='dtext'>Defeated</div> <button id='end'>Again?</button>"
                this.parent.appendChild(defeat)
                const rest = document.getElementById('end')
                rest.addEventListener('click', () => {
                    window.location.reload()
                })
                this.sam.sprite.remove()
            }
        }
    }
}
