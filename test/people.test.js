const { filterByAge, splitName } = require("../src/people.js");
const testData = require("../src/data.js");

describe('filterByAge', () => {
    test('should remove people that are less than 18 years old', () => {
        const result = filterByAge(testData.people);
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
        const input = {
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
        const input = {
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
        const input = {
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

    test("should split Raee's name correctly", () => {
        const input = {
            name: "Raee Habibi",
            age: 38,
            gender: 'female',
        };
        const result = splitName(input);

    });
});
