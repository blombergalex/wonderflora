function Product(name, kind, colour) {
    this.name = name,
    this.kind = kind,
    this.colour = colour
}

const sunflower = new Product('Sunflower', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'yellow');
const lily = new Product('Tulip', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'pink');
const rose = new Product('Rose', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'red');


export const flowers = [sunflower, lily, rose];

export const plants = [
    new Product('Monstera', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'dark-green'),
    new Product('Zanzibar-gem', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green'),
    new Product('Snake-plant', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green-yellow')
]

export const seeds = [
    new Product('Sunflower seeds', 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
    new Product('Tulip seeds', 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'mixed'),
    new Product('Rose seeds', 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'white')
]