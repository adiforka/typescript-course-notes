interface Point {
    x: number,
    y: number
}

// careful with this
let drawPoint = (point: Point) => {
    console.log(point.x)
    console.log(point.y)
}

let getDistance = (pointA: Point, pointB: Point) => {
    const diffX = Math.abs(pointA.x - pointB.x)
    const diffY = Math.abs(pointA.y - pointB.y)
    return Math.sqrt(diffX ** 2 + diffY ** 2)
}

const distance = getDistance({ x: 2, y: 5 }, { x: 2, y: 5 })
console.log(distance)


