class Enemy {
    constructor (x, y, health,parent,sam){
        this.x = x
        this.y = y
        this.health = health
        this.speed = 2
        this.parent = parent
        this.sam = sam
        this.timerId = null
        this.sprite
        this.width = 50
        this.height = 50
        this.timerEn
        this.moveX = this.moveX.bind(this)
    }

    insertEnemy(){
        const newEnemy = document.createElement('div')
        newEnemy.classList.add('enemy')
        newEnemy.style.left = this.x + 'px'
        newEnemy.style.top = this.y + 'px'
        newEnemy.style.width = this.width + "px"
        newEnemy.style.height = this.height + "px"
        this.parent.appendChild(newEnemy)
        this.sprite = newEnemy
    }
    moveX(){
            this.x += this.speed
            if(this.x >= -60 && this.x <= 1450)
            this.sprite.style.left = this.x + 'px'
            if(this.x > 1450){
                this.removeEnemy()
            }
    }

    removeEnemy(){

    }
    
    //Rng

    // Disparar a un enemigo
    shootSam(){

    }
}