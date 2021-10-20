// har ki ke sennesh paayine 18 hast ro hazf kon
function filterByAge(people) {
    // code ro injaa benevis

    return people.filter(item => item.age > 18);
}

// esm ro sare avalin space taghsim kon be firstName, lastName
function splitName({name, ...rest}) {
    let [firstName, lastName] = name.split(' ');
    return {
        firstName,
        lastName,
        ...rest,
    };
}

// mesle splitName ama baraaye ye array az jense Person
function mapToName(people) {

}

// banaa bar jensiat be do gorooh (array) taghsim kon
function splitByGender(people) {

}

// har setta ro anjaam bede
function filterMapAndSplit(people) {

}

module.exports = {
    filterByAge,
    splitName,
    mapToName,
    splitByGender,
    filterMapAndSplit,
};