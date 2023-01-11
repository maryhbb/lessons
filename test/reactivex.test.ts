import {projectArrays} from "../src/reactivex";

describe('reactivex', () => {
    test('projectArrays', () => {
        const expected = [
            {
                id: 70111470,
                title: 'Die Hard',
            },
            {
                id: 654356453,
                title: 'Bad Boys',
            },
            {
                id: 65432445,
                title: 'The Chamber',
            },
            {
                id: 675465,
                title: 'Fracture',
            },
        ];

        expect(projectArrays()).toEqual(expected);
    });
});
