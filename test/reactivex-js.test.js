const { implementMap } = require('../src/reactivex-js');

describe('reactivex-js', () => {
    test('implementMap', () => {
        // backup original map function
        const originalMap = Array.prototype.map;

        // replace original map function with our custom map
        implementMap();

        // test if the new map behaves as we expect
        expect([1, 2, 3].map(x => x + 1)).toEqual([2, 3, 4]);
        expect([1, 21, 3].map(x => x * 2)).toEqual([2, 42, 6]);
        expect([3, 7, 8].map(x => x * x)).toEqual([9, 49, 64]);
        expect(
            [
                { firstName: 'Mehdi', lastName: 'Salem' },
                { firstName: 'John', lastName: 'Doe' },
            ].map(({ firstName, lastName }) => ({
                vorname: firstName,
                nachname: lastName,
            })),
        ).toEqual([
            { vorname: 'Mehdi', nachname: 'Salem' },
            { vorname: 'John', nachname: 'Doe' },
        ]);

        // restore original map
        Array.prototype.map = originalMap;
    });
});
