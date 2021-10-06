import {Calculator} from '../src/example-class';

describe('test', () => {
	let calculator: any;

	beforeEach(() => {
		calculator = new Calculator(5, 2);
	});

	test('add', async () => {
		expect(calculator.add()).toEqual(7);
	});
});
