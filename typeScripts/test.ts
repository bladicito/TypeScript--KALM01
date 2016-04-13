
    interface Point {
        x: number;
        y: number
    }

    class Monster {
        name:string;
        initialPosition:Point;

        constructor(name, initialPosition) {
            this.name = name;
            this.initialPosition = initialPosition;
        }

        drawMonster() {
            console.log(this.initialPosition.x);
            console.log(this.initialPosition.y);
        }
    }

    var scary = new Monster('Alien', {x: 0, y: 0});
    scary.drawMonster();



