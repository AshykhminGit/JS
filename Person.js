const name1 = 'Bogdan'
const postsQty = 23
// можно использоватьб такой формат записи при создании обекта когда пременные уже есть
const userProfile = {
    name1:name1,
    postsQty:postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)
console.table(userProfile)

// можно по другому чуть более читабельно


const userProfile1 = {
    name1,
    postsQty,
    hasSignedAgreement: false
}


