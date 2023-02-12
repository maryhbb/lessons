import { Book } from "../types";

export function countBooks(books: Book[]): number {
    return books.length;
}

export function findUniqueCountries(books: Book[]): string[] {

    for (const book of books) {
        console.log(book.country)

    }
    return []; // to be implemented

}
