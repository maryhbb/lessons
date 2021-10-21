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

export type Male = Person & { gender: 'male' };

export type Female = Person & { gender: 'female' };

export interface GenderGroups {
    males: Male[],
    females: Female[],
}