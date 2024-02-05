class Bullets{
    constructor(x, y, direction,parent, enemies, sam, bullets){
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

insertBullet(){
    let newbullet = document.createElement('div')
    newbullet.classList.add('bullet')
    newbullet.style.top = this.y + 'px'
    newbullet.style.left = this.x + 'px'
    newbullet.style.width = this.width + 'px'
    newbullet.style.height = this.height + 'px'
    this.parent.appendChild(newbullet)
    this.sprite = newbullet 
}

move(){
    this.x += this.speed * this.direction
    this.sprite.style.left = this.x + 'px'
    if(this.x > 1400){
        this.removeBullet()
    }

}

removeBullet(){
    this.parent.removeChild(this.sprite)
    clearInterval(this.timerBullet)
    this.bullets.splice(this.bullets.indexOf(this.sprite), 1)
}

checkCollision(){

}

}