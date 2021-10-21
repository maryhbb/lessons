// har ki ke sennesh paayine 18 hast ro hazf kon
import { Female, GenderGroups, Male, Person, SimplePerson } from '../types';

export function filterByAge(people: SimplePerson[]): SimplePerson[] {
    // code ro injaa benevis

    return people.filter(item => item.age > 18);
}

// esm ro sare avalin space taghsim kon be firstName, lastName
export function splitName({ name, ...rest }: SimplePerson): Person {
    let [firstName, lastName] = name.split(' ');
    return {
        firstName,
        lastName,
        ...rest,
    };
}

// mesle splitName ama baraaye ye array az jense Person
export function mapToName(people: SimplePerson[]): Person[] {
    return people.map(splitName);
}

// banaa bar jensiat be do gorooh (array) taghsim kon
export function splitByGender(people: Person[]): GenderGroups {
    const [male, female] = people.reduce(
        (acc, person) => {
            const [maleGroup, femaleGroup] = acc;
            if (person.gender === 'male') {
                maleGroup.push(person as Male);
            } else {
                femaleGroup.push(person as Female);
            }
            return acc;
        },
        [[] as Male[], [] as Female[]] as const,
    );
    return { male, female };
}

// har setta ro anjaam bede
export function filterMapAndSplit(people: SimplePerson[]): GenderGroups {
    // todo: to be implemented
    return { male: [], female: [] };
}
