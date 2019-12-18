let width = 500; // Width of the scene
let height = 500; // Height of the scene
let PERSPECTIVE = width * 0.8; // The field of view of our 3D scene
            let PROJECTION_CENTER_X = width / 2; // x center of the canvas
            let PROJECTION_CENTER_Y = height / 2; // y center of the canvas
            const dots = []; // Store every particle in this array
            const DOT_COUNT = 20;
            const radius = 4;
            const directions = {
                IN: 'IN',
                OUT: 'OUT',
            };
            const MIN_DEPTH = 0;
            const MAX_DEPTH = width;

class Dot {
    constructor() {
        this.x = (Math.random() - 0.5) * width; // Give a random x position
        this.y = (Math.random() - 0.5) * height; // Give a random y position
        this.z = width; // Give a random z position
        this.radius = radius; // Size of our element in the 3D world

        this.xProjected = 0; // x coordinate on the 2D world
        this.yProjected = 0; // y coordinate on the 2D world
        this.scaleProjected = 0; // Scale of the element on the 2D world (further = smaller)

        this.speed = this.randomIntFromInterval(500, 1000) / 100;
        this.direction = Math.random() > 0.5 ? directions.IN : directions.OUT;
        this.nextSpeed = this.calcNextSpeed();
        this.opacity = 1;
    }

    randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    isMovingIn() {
        return this.direction === directions.IN;
    }

    calcNextSpeed() {
        return this.isMovingIn() ? this.speed : -this.speed;
    }

    revertDirection() {
        this.direction = this.isMovingIn() ? directions.OUT : directions.IN;
    }
    // Project our element from its 3D world to the 2D canvas
    project() {
        // The scaleProjected will store the scale of the element based on its distance from the 'camera'
        this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
        // The xProjected is the x position on the 2D world
        this.xProjected = this.x * this.scaleProjected + PROJECTION_CENTER_X;
        // The yProjected is the y position on the 2D world
        this.yProjected = this.y * this.scaleProjected + PROJECTION_CENTER_Y;
    }
    // Draw the dot on the canvas
    draw() {
        // We first calculate the projected values of our dot
        this.project();
        // We define the opacity of our element based on its distance
        this.opacity = Math.abs(1 - this.z / width);
        // ctx.globalAlpha = this.opacity;
        // We draw a rectangle based on the projected coordinates and scale
        // ctx.fillRect(
        //     this.xProjected - this.radius,
        //     this.yProjected - this.radius,
        //     this.radius * 2 * this.scaleProjected,
        //     this.radius * 2 * this.scaleProjected
        // );
    }

    update() {
        let z = this.z;
        if (z <= MIN_DEPTH) {
            z = MIN_DEPTH;
            this.revertDirection();
        }
        if (z >= MAX_DEPTH) {
            z = MAX_DEPTH;
            this.revertDirection();
        }
        this.speed = this.calcNextSpeed();
        this.z += this.speed;
        this.draw();
    }
}

export default Dot;
