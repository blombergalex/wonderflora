function Product(name, kind, colour, price) {
    this.name = name,
    this.kind = kind,
    this.colour = colour,
    this.price = price
}

const sunflower = new Product('Sunflower', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'yellow', '79 kr');
const tulip = new Product('Tulip', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'pink', '39 kr');
const rose = new Product('Rose', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'red', '99 kr');
const daisy = new Product('Daisy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'white', '59 kr');
const lily = new Product('Lily', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'purple', '49 kr');
const orchid = new Product('Orchid', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'purple', '89 kr');
const peony = new Product('Peony', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'pink', '89 kr');
const daffodil = new Product('Daffodil', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'yellow', '49 kr');
const iris = new Product('Iris', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed', 'blue', '79 kr');

export const flowers = [sunflower, tulip, rose, daisy, lily, orchid, peony, daffodil, iris];

export const plants = [
    new Product('Monstera', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'dark-green', '229 kr'),
    new Product('Zanzibar-gem', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green', '139 kr'),
    new Product('Snake-plant', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green-yellow', '189 kr'),
    new Product('Aloe Vera', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green', '69 kr'),
    new Product('Bamboo', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green', '99 kr'),
    new Product('Spider Plant', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', 'green', '79 kr')
];

export const seeds = [
    new Product('Sunflower-seeds', 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'red', '39 kr'),
    new Product('Tulip-seeds', 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'mixed', '19 kr'),
    new Product('Rose-seeds', 'Do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'white', '29 kr')
];