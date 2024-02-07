class Boss extends Enemy {
    constructor(sam, parent, enemies) {
        super(50, 50, 1, 10, parent, sam, enemies)
        this.width = 100
        this.height = 100
        this.speed = 0.2
        this.sprite

    }

    insertBoss() {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('id', 'boss')
        newDiv.style.width = this.width + 'px'
        newDiv.style.height = this.height + 'px'
        newDiv.style.left = this.x + 'px'
        newDiv.style.top = this.y + 'px'
        this.parent.appendChild(newDiv)
        this.sprite = newDiv
    }
}