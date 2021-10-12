import {PersonName} from "../types/person-name";

export class Person implements Person {
	name: PersonName;

	constructor(personName: PersonName) {
		this.name = personName;
	}

	getFullName() {
		return this.name.first + ' ' + this.name.middle + ' ' + this.name.last;
	}
}
