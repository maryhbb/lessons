export type Gender = 'female' | 'male';

export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
}

export type SimplePerson = Omit<Person, 'firstName' | 'lastName'> & {
    name: string;
}

export interface Male extends Person {
    gender: 'male'
}

export interface Female extends Person {
    gender: 'female'
}

export interface GenderGroups {
    male: Male[],
    female: Female[],
}