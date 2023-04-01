export const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

export function generate() {
    console.log("Exports imported");
}

//let prevPos = [-30,-20,0]
let prevPos = [0,0,0]
let currentPos = [90,-20, 0]
let rotation = 0 
let position = {}


export function generateRandomSharkPath2() {
    let randomX = 0
    let zPosition = 0
    //const zDiff = currentPos[2] - prevPos[2]
    //const xDiff = currentPos[0] - prevPos[0]
    //let angleBase = 0
    let quad = ""
    const randAngle = (Math.PI/2 * Math.random() * 0.66)
    //Quad IV
    if (currentPos[0] >= 0 && currentPos[2] >= 0) {
        //angle = Math.atan(xDiff / zDiff) * -1
        rotation =  Math.PI / 2 - randAngle
        randomX = (Math.random() * (180)) - 90 - currentPos[0]
        zPosition = currentPos[2] - (Math.tan(randAngle) * Math.abs(randomX)) 
        quad = "quad 4"
    //Quad III
    } else if (currentPos[0] < 0 && currentPos[2] >= 0) {
       // angle = -( Math.atan(xDiff / zDiff))
        rotation = 1.5 * Math.PI + randAngle
        randomX = (Math.random() * (180 - currentPos[0])) - (90 - currentPos[0])
        zPosition = currentPos[2] - (Math.tan(randAngle) *  Math.abs(randomX)) 
        quad = "quad 3"
    //Quad II
    } else if (currentPos[0] < 0 && currentPos[2] < 0) {
        //angle = ( Math.PI + Math.atan(xDiff / zDiff) ) * -1
        rotation =  1.5 * Math.PI  - randAngle
        randomX = (Math.random() * 180 + currentPos[0]) - ( 90)
        zPosition = (Math.tan(randAngle) * (Math.abs(randomX))) + currentPos[2]
        quad = "quad 2"
    //Quad I
    } else {
        //angle = Math.atan(zDiff / xDiff) 
        console.log("current position Quad 1: " + currentPos);
        
        rotation = Math.PI /2 + randAngle
        randomX = (Math.random() * (180 - currentPos[0])) - (90 - currentPos[0])
        zPosition = (Math.tan(randAngle) * (Math.abs(randomX))) + currentPos[2]
        quad = "quad 1"
    }

    //angle = Math.atan(currentPos[2] - prevPos[2] / currentPos[0] - prevPos[0])
    

    //prevPos = currentPos
    //currentPos = [Math.random() * 60 - 30, -20, Math.random() * 60 - 100 ]
    currentPos = [randomX, -20, zPosition]
    position = {
        rotation: rotation,
        //prevPos: prevPos,
        //currentPos: currentPos,
        randomX: randomX,
        zPosition: zPosition,
        quad: quad
    }

    return position   
}

export function generateRandomSharkPath() {
    let randomX = 0
    let zPosition = 0
    let quad = ""

    //Quad I
    if (currentPos[0] > 0 && currentPos[2] === 0) {
        //angle = Math.atan(xDiff / zDiff) * -1
        rotation =  Math.PI / 2 
        randomX = 0
        zPosition = (Math.random() * -20) - 30
        quad = "quad 1"
    //Quad II
    } else if (currentPos[0] === 0 && currentPos[2] < 0) {
       // angle = -( Math.atan(xDiff / zDiff))
        rotation = Math.PI * 0.75
        randomX = (Math.random() * -30) - 60 
        zPosition = 0 
        quad = "quad 2"
    //Quad III
    } else if (currentPos[0] < 0 && currentPos[2] === 0) {
        //angle = ( Math.PI + Math.atan(xDiff / zDiff) ) * -1
        rotation =  1.5 * Math.PI  
        randomX = 0
        zPosition = (Math.random() * 20) + 10
        quad = "quad 3"
    //Quad IV
    } else if (currentPos[0] === 0 && currentPos[2] > 0) {
        //angle = Math.atan(zDiff / xDiff) 
        console.log("current position Quad 1: " + currentPos);
        
        rotation = Math.PI * 1.75
        randomX = (Math.random() * 50) + 40
        zPosition = 0
        quad = "quad 4"
    } else {
        console.log("error");
    }
    
    currentPos = [randomX, -20, zPosition]
    
    position = {
        rotation: rotation,
        //prevPos: prevPos,
        //currentPos: currentPos,
        randomX: randomX,
        zPosition: zPosition,
        quad: quad
    }

    return position   
}


