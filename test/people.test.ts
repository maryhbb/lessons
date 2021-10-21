import {filterByAge, splitByGender, splitName} from "../src/people";
import {Person, SimplePerson} from "../types";

const {mapToName} = require("../src/people");

const people: SimplePerson[] = [{
    name: "John Doe",
    age: 43,
    gender: 'male',
}, {
    name: "Jane Doe",
    age: 38,
    gender: 'female',
}, {
    name: "Mani Habibi",
    age: 16,
    gender: 'male',
}, {
    name: "Raee Habibi",
    age: 39,
    gender: 'female',
}]

describe('filterByAge', () => {
    test('should remove people that are less than 18 years old', () => {
        const result = filterByAge(people);
        expect(result).toEqual([{
            name: "John Doe",
            age: 43,
            gender: 'male',
        }, {
            name: "Jane Doe",
            age: 38,
            gender: 'female',
        }, {
            name: "Raee Habibi",
            age: 39,
            gender: 'female',
        }]);
    });

    test('should remove empty list', () => {
        const result = filterByAge([]);
        expect(result).toEqual([]);
    });

    test('should remove one item', () => {
        const result = filterByAge([{
            name: 'Raee Habibi',
            age: 39,
            gender: 'female',
        }]);
        expect(result).toEqual([{
            name: 'Raee Habibi',
            age: 39,
            gender: 'female',
        }]);
    });

    test('should remove the only item', () => {
        const result = filterByAge([{
            name: 'Mani Habibi',
            age: 16,
            gender: 'male',
        }]);
        expect(result).toEqual([]);
    });

    test('should remove the only item', () => {
        const result = filterByAge([{
            name: 'Mani Habibi',
            age: 16,
            gender: 'male',
        }, {
            name: "Johannes Diemke",
            age: 40,
            gender: 'male',
        }]);
        expect(result).toEqual([{
            name: "Johannes Diemke",
            age: 40,
            gender: 'male',
        }]);
    });
});

describe('splitName', () => {
    test("should split Azam's name correctly", () => {
        const input: SimplePerson = {
            name: "Ali Vaez",
            age: 35,
            gender: 'male',
        };

        expect(splitName(input)).toEqual({
            firstName: 'Ali',
            lastName: 'Vaez',
            age: 35,
            gender: 'male',
        });
    });

    test("should split Raee's name correctly", () => {
        const input: SimplePerson = {
            name: "Raee Habibi",
            age: 38,
            gender: 'female',
        };

        expect(splitName(input)).toEqual({
            firstName: 'Raee',
            lastName: 'Habibi',
            age: 38,
            gender: 'female',
        });
    });

    test("should split Mani's name correctly", () => {
        const input: SimplePerson = {
            name: "Mani Habibi",
            age: 16,
            gender: 'male',
        };

        expect(splitName(input)).toEqual({
            firstName: 'Mani',
            lastName: 'Habibi',
            age: 16,
            gender: 'male',
        });
    });
});


describe('mapToName', () => {

    test('should map persons correctly', () => {
        const input: SimplePerson[] = [{
            name: "John Doe",
            age: 43,
            gender: 'male',
        }, {
            name: "Jane Doe",
            age: 38,
            gender: 'female',
        }, {
            name: "Mani Habibi",
            age: 16,
            gender: 'male',
        }, {
            name: "Raee Habibi",
            age: 39,
            gender: 'female',
        }];

        const expectedOutput: Person[] = [{
            firstName: "John",
            lastName: "Doe",
            age: 43,
            gender: 'male',
        }, {
            firstName: "Jane",
            lastName: "Doe",
            age: 38,
            gender: 'female',
        }, {
            firstName: "Mani",
            lastName: "Habibi",
            age: 16,
            gender: 'male',
        }, {
            firstName: "Raee",
            lastName: "Habibi",
            age: 39,
            gender: 'female',
        }];

        expect(mapToName(input)).toEqual(expectedOutput);
    });
});


describe('splitByGender', () => {
    test('should return empty list for empty input', () => {
        expect(splitByGender([])).toEqual({ male: [], female: [] });
    });

    test('should put all items into female if it is an all female list', () => {
        const persons: Person[] = [{
            firstName: "Jane",
            lastName: "Doe",
            age: 38,
            gender: 'female',
        }, {
            firstName: "Raee",
            lastName: "Habibi",
            age: 39,
            gender: 'female',
        }];

        expect(splitByGender(persons)).toEqual({
            male: [],
            female: persons,
        });
    });

    test('should put all items into male if it is an all male list', () => {
        const persons: Person[] = [{
            firstName: "John",
            lastName: "Doe",
            age: 43,
            gender: 'male',
        }, {
            firstName: "Mani",
            lastName: "Habibi",
            age: 16,
            gender: 'male',
        }];

        expect(splitByGender(persons)).toEqual({
            male: persons,
            female: [],
        });
    });

    test('should return the correct gender groups', () => {
        const persons: Person[] = [{
            firstName: "John",
            lastName: "Doe",
            age: 43,
            gender: 'male',
        }, {
            firstName: "Jane",
            lastName: "Doe",
            age: 38,
            gender: 'female',
        }, {
            firstName: "Raee",
            lastName: "Habibi",
            age: 38,
            gender: 'female',
        }, {
            firstName: "Mani",
            lastName: "Habibi",
            age: 16,
            gender: 'male',
        }];

        expect(splitByGender(persons)).toEqual({
            male: [{
                firstName: "John",
                lastName: "Doe",
                age: 43,
                gender: 'male',
            }, {
                firstName: "Mani",
                lastName: "Habibi",
                age: 16,
                gender: 'male',
            }],
            female: [{
                firstName: "Jane",
                lastName: "Doe",
                age: 38,
                gender: 'female',
            }, {
                firstName: "Raee",
                lastName: "Habibi",
                age: 38,
                gender: 'female',
            }],
        });
    });

});
