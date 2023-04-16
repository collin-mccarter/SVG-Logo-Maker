const fs = require("fs")
const inquirer = require("inquirer")
const {Triangle, Circle, Square} = require("./lib/shapes.js")

class SVG {
    constructor() {
        this.textElement = ""
        this.shapeElement = ""
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200" >${this.shapeElement}${this.textElement}</svg>`
    }

    setTextElement(text,color) {
        this.textElement = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter Up to 3 Characters For The Logo:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter A Color, Color Keyword or Hexadecimal Number For The Text Color:"
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter A Color, Color Keyword or Hexadecimal Number For The Shape Color:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which Pixel Image you would like?",
        choices: ["Triangle", "Circle", "Square"],
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("logo.svg Generated");
    });
}

async function init() {
    var svgString = ""
    var svgFile = "logo.svg"

    const answers = await inquirer.prompt(questions)
    
    var userText = ""
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text
    } else {
        console.log("Please Enter 1 to 3 letters")
        return
    }

    userFontColor = answers["text-color"]

    userShapeColor = answers["shape-color"]

    userShapeType = answers["shape"]

    let userShape
        if (userShapeType === "Triangle" || userShapeType === "triangle") {
            userShape = new Triangle();
        } else if (userShapeType === "Circle" || userShapeType === "circle") {
            userShape = new Circle();
        } else if (userShapeType === "Square" || userShapeType === "square") {
            userShape = new Square();
        }
    userShape.setColor(userShapeColor)

    var svg = new SVG();

    svg.setTextElement(userText, userFontColor)
    svg.setShapeElement(userShape)
    svgString = svg.render()

    writeToFile(svgFile, svgString)
}

init()
