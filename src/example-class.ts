export class Calculator {
	firstNumber: number;
	secondNumber: number;

	/**
	 *
	 * @param {number} firstNumber
	 * @param {number} secondNumber
	 */
	constructor(firstNumber: number, secondNumber: number) {
		this.firstNumber = firstNumber;
		this.secondNumber = secondNumber;
	}

	add() {
		return (this.firstNumber + this.secondNumber);
	}
}
