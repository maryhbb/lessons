import { describe, test, expect } from '@jest/globals';
import books from './mockData';

import { countBooks, findUniqueCountries } from '../src/books';

describe('books', () => {
    test('getNumberOfBooks should return the correct number', () => {
        expect(countBooks(books)).toEqual(100);
    });
    test('calculating the unique names of the countries should work', () => {
        const expected = [
            "Nigeria",
            "Denmark",
            "Italy",
            "Sumer and Akkadian Empire",
            "Achaemenid Empire",
            "India/Iran/Iraq/Egypt/Tajikistan",
            "Iceland",
            "United Kingdom",
            "France",
            "Republic of Ireland",
            "Argentina",
            "Algeria, French Empire",
            "Romania, France",
            "Spain",
            "England",
            "Russia",
            "Germany",
            "United States",
            "Greece",
            "Colombia",
            "Saxe-Weimar",
            "Brazil",
            "Norway",
            "Irish Free State",
            "Czechoslovakia",
            "India",
            "Japan",
            "Sweden",
            "China",
            "Egypt",
            "Austria",
            "Russia/United States",
            "Roman Empire",
            "Portugal",
            "Mexico",
            "Sultanate of Rum",
            "United Kingdom, India",
            "Persia, Persian Empire",
            "Sudan",
            "Ireland",
            "France/Belgium"
        ];
        expect(findUniqueCountries(books)).toEqual(expect.arrayContaining(expected));
    });
});
