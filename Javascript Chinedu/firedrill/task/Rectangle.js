class Shape {
    #name
    constructor(name, width, height) {
        this.#name = name;
        this.width = width;
        this.height = height;
    }
    getName(){
        return `Shape name: ${this.#name}`
    }

}

class Rectangle extends Shape {
    constructor(name ,width, height) {
        super(name, width, height);
    }

    getArea(){
        let area = this.height * this.width;
        return `The area of this rectangle: ${area}`;
    }

    isWallSquarish(){
         return this.height === this.width ? "This shape is squarish" : "This shape is not squarish";

    }
}



module.exports = {Rectangle};