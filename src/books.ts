import { Book } from '../types';

export function countBooks(books: Book[]): number {
    return books.length;
}

export function findUniqueCountries(books: Book[]): string[] {
    const countries = books.map(book => book.country);

    const uniqueCountries: string[] = [];

    for (const country of countries) {
        if (!uniqueCountries.includes(country)) {
            uniqueCountries.push(country);
        }
    }
    return uniqueCountries;
}
