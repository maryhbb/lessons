import { Book } from '../types';

export function countBooks(books: Book[]): number {
    return books.length;
}

export function findUniqueCountries(books: Book[]): string[] {
    let countries = books.map(book => book.country);

    // let uniqueCountries = countries.filter(
    //     (value, index, arr) => arr.indexOf(value) === index,
    // );
    // return uniqueCountries;

    const results: string[] = [];

    for (const country of countries) {
        if (!results.includes(country)) {
            results.push(country);
        }
    }
    return results;

}
