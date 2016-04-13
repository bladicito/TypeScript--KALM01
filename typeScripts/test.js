var Monster = (function () {
    function Monster(name, initialPosition) {
        this.name = name;
        this.initialPosition = initialPosition;
    }
    Monster.prototype.drawMonster = function () {
        console.log(this.initialPosition.x);
        console.log(this.initialPosition.y);
    };
    return Monster;
})();
var scary = new Monster('Alien', { x: 0, y: 0 });
scary.drawMonster();
//# sourceMappingURL=test.js.map