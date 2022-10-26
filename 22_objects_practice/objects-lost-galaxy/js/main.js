//Create a mouse object that has four properties and three methods

const mouse = {
    brand: 'Logitech',
    model: 'M705',
    wireless: true,
    compact: false,
    click() {
        console.log('click');
    },
    dbl() {
        console.log('click', 'click');
    },
    rclick() {
        console.log('right click');
    }
}

console.table(mouse);