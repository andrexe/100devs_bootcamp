//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(name, power, health, res) {
    this.name = name;
    this.power = power;
    this.health = health;
    this.resilience = res;
    this.punch = function() {
        console.log(`Punched enemy for ${this.power * .15} hp.`)
        return this.power * .15;
    };
    this.kick = function() {
        console.log(`Kicked enemy for ${this.power * .2} hp.`)
        return this.power * .2;
    };
    this.takeDamage = function(attack) {
        let damage = attack * (100 - this.resilience) / 100;
        this.health -= damage;
        console.log(`You took ${damage} pts of damage and have ${this.health} left.`)
        return this.health;
    }
}

let arnold = new MakeFighter('Arnold', 78, 80, 84);
let stallone = new MakeFighter('Sly', 80, 68, 86);

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));

console.log(arnold.takeDamage(stallone.kick()));
console.log(stallone.takeDamage(arnold.kick()));

console.log(arnold.takeDamage(stallone.punch()));
console.log(stallone.takeDamage(arnold.punch()));