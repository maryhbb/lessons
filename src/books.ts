import { Book } from '../types';

export function countBooks(books: Book[]): number {
    return books.length;
}

export function findUniqueCountries(books: Book[]): string[] {
    // for (const book of books) {
    //     console.log(book.country)
    // }

    let countries = books.map(book => book.country);
    console.log(countries);
    let uniqueCountries = countries.filter(
        (value, index, arr) => arr.indexOf(value) === index,
    );
    return uniqueCountries;
}
