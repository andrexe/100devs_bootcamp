//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkProSkater(name, moves, speed, points) {
    this.name = name
    this.moves = moves
    this.speed = speed
    this.points = points
    this.flip = () => {
        console.log('Nice flip!');
        this.points += 5;
        console.log(`You now have ${this.points} points.`);
    }
    this.upgrade = () => {
        if (this.points < 10) { console.log('insufficient points'); return }
        this.points -= 10;
        this.speed += 1;
        console.log(`upgraded speed to ${this.speed}`);
        console.log(`remaining points: ${this.points}`);
    }
    this.reset = (name, moves, speed, points) => {
        this.name = name ?? ''
        this.moves = moves ?? 0
        this.speed = speed ?? 0
        this.points = points ?? 0
    }
}

const tony = new TonyHawkProSkater('Tony', 3, 5, 0);
console.log(tony);
tony.flip();
tony.upgrade();
tony.flip();
console.log(tony);
tony.upgrade();
console.log(tony);
tony.reset('Jack', 3, 3, 100);
console.log(tony);