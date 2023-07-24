import { faker } from '@faker-js/faker';
// const faker = require("@faker-js/faker")
// import { faker } from '@faker-js/faker/locale/de';

const clients = [];

const createRandomClient = () => {
	return {
		username: faker.internet.userName(),
		email: faker.internet.email(),
		street: faker.address.streetAddress(),
		city: faker.address.city(),
		state: faker.address.state(),
		zip: faker.address.zipCode(),
		employer: faker.company.name(),
		industry: faker.commerce.department(),
		avatar: faker.image.avatar(),
		password: faker.internet.password(),
		birthdate: faker.date.birthdate().toISOString(),
		registeredAt: faker.date.past().toISOString(),
		stillClient: faker.datatype.boolean()
	};
}

for(let i = 0; i < 100; i++){
	clients.push(createRandomClient());
}

console.log(clients);
