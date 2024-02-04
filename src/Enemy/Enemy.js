class Enemy {
    constructor (x, y, health, parent, sam){
        this.x = x
        this.y = y
        this.health = health
        this.speed = 1
        this.sam
        this.timerId = null
        this.sprite
    }
    insertEnemy(){
        const game = document.getElementById('game')
        const newEnemy = document.createElement('div');
        newEnemy.setAttribute('id', 'enemy')
        newEnemy.style.left = this.x
        newEnemy.style.top = this.y
        game.appendChild(newEnemy);
    }
    
    //Rng

    // Disparar a un enemigo
    shootSam(){

    }
}