//abstract class
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("The class Shape cannot be directly constructed.");
        }
    }

    area() {
        throw new Error("The method 'area' must be implemented.");
    }

    perimeter() {
        throw new Error("The method 'perimeter' must be implemented.");
    }
}

//concrete classes
class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    area() {
        return Math.pow(this.sideLength, 2);
    }

    perimeter() {
        return this.sideLength * 4;
    }
}

class Circle extends Shape {
    constructor(rad) {
        super();
        this.rad = rad;
    }

    area() {
        return Math.PI * Math.pow(this.rad, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.rad;
    }
}