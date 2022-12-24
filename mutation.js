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

// можно по другому чуть более читабельно БЕЗ ДУБЛИРОВАНИЯ

const userProfile1 = {
    name1,
    postsQty,
    hasSignedAgreement: false
}


// Про мутации и как изюежать, когда меняем что то в обекте сылочного типа  то и в самом папе оно меняется, 
//чтобы в родителе этого избежать есть два способо. 1. кога нет вложенных обтьектов в обьекты

const person = {
    name: 'Bob',
    age:25,
    family: {
        wife:'Ira'}
}

const person2 = Object.assign({},person) //Хуяк и сделали копию, но затык 
                                          //в том что если будут в этом обьекте вложенные оббекты типа внутри ьудет family { wife: Ira}то  внутренний будут меняться

person2.age = 40  
person2.family='Snezhanna' 
person2.name = "Frank"                                     
console.log(person)
console.log(person2)
console.log(person)



//вариант второй создания копий оббекта 

const person3 = {...person} // нболее короткий вариант и тоде мутирует вложенное

person3.name ="Alice"
person3.age =18
person3.family.wife = 'Husband'
person3.family = "Sig"

console.log(person3)
console.log(person)

// вариант с избеганим мутаций
// сначала нужно законверитть обьект с строку  и обратно через двойную конвертацию  

const person4 = JSON.parse(JSON.stringify(person))  //сначала конвертим в строчку а потом распарсиваем обратно грязный хак // ссылки на вложенные оббекты не сохраняются в памяти

person4.name = 'Vasya'

console.log(person4)
console.log(person)

