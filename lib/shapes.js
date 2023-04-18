// defining shape class
class Shape {
    // sets up color and color values
    constructor() {
        this.color = ""
    }

    setColor(color) {
        this.color = (color)
    }
}

// creating a triangle and shape dimensions -> will be filled with color
class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// creating a circle and shape dimensions -> will be filled with color
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// creating a square and shape dimensions -> will be filled with color
class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`
    }
}

// exporting shapes
module.exports = {Triangle, Circle, Square}
