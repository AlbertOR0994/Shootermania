class Boss extends Enemy {
    constructor(sam, parent, enemies) {
        super(60, 60, 1, 10, parent, sam, enemies, health)
        this.width = 100
        this.height = 100
        this.speed = 0.5
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
        this.parent.appendChild(newDiv)
        this.sprite = newDiv
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
        if(this.directionX == -1 && this.x >=0){
            this.sprite.style.transform = "rotateY(180deg)"
        }
        if (this.directionX == 1 && this.x <=1450){
            this.sprite.style.transform = "rotateY(360deg)"
        }
        
    }

    checkCollision(){
        if (this.x < (this.sam.x + this.sam.width) &&
            (this.x + this.width) > this.sam.x &&
            this.y < (this.sam.y + this.sam.height) &&
            (this.y + this.height) > this.sam.y) 
            {
            this.sam.health -=1
            this.checkStatus() 
            return 
         }
    
    }

    checkStatus(){
        if(this.health === 0){this.isDead = true}
        if(this.isDead === true){ 
            this.parent.removeChild(this.sprite)
            const index = this.enemies.indexOf(this);
        if (index !== -1) {
            this.enemies.splice(index, 1);
        }
        clearInterval(this.timerEnemy)

          }
    
        
      }
    
}

