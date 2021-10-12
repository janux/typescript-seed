import {Person} from "../src/impl/person";

describe('person test', () => {
	let person: Person;

	beforeEach(() => {
		person = new Person({first: 'Jacqueline', middle: 'Casey', last: 'Smith'});
	});

	test('get person full name', async () => {
		expect(person.getFullName()).toEqual('Jacqueline Casey Smith');
	});
});
