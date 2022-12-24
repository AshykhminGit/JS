
number =10

// if (number ==10 ) {
//     console.log('This is ten');
// }
//     else { number >10
//         "This is more then 10" 
// }
hour =20
if (hour < 18) {
    console.log('"Good day"')
    
  } else if (hour > 18) {
    console.log('"Good evening"')
    
  } else 
    {console.log("fuck you spielberg")}


// myName="Stanislav";

// mySurname="Ashykhmin";

// fullname = myName+" "+mySurname;

// console.log(fullname) 

// length = myName.length
// console.log(myName.length)
// console.log(mySurname.length)




const  objectA = {
    a:10,
    b:true

}
const copyOFA = objectA

console.log(objectA)


console.log(copyOFA)

copyOFA.a =20

console.log(objectA)

copyOFA.b = 7

console.log(objectA)

copyOFA.c =3
console.log(objectA)
console.table(objectA)
console.dir(objectA)

console.time(objectA)

copyOFA.d = "fuckyou"
console.table(objectA)


function a () {
    console.log('Fuck you Spielberg') 
}

a()


const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA',
    infoBands: {  //вложенный обьект
        Mex: 1000,
        Nazi:300,
        Black: 2500

    }

}

console.log(myCity.city)
console.log(myCity.popular)
console.log(myCity.country)

myCity.popular =false
console.log(myCity.popular)

myCity.destination ="dohera km"

myCity.population = 100000

//Добавление в обьект добавочныъ значений можно делать двумя способами 1 через точку втолрой через скобки
console.table(myCity)
myCity.white = "White people" // добавили белых и черных в город через точку  - .white = "Белые"
myCity.black = 'Black people'
console.table(myCity)
delete myCity.country  // удалили из обьекта свойство country  с помощб. делита .. я вспомнил что в пиионе были \ти херни с аппенд  и какое то значение.    
                        // и там для удаления было pop   А тут delete  и указываешь что 
console.table(myCity)

//  добавление совйс тв в обьект через скобки 

myCity['Новый обьект'] = true
console.table(myCity)

//  и если нам надо что то добавить серез уже созданную переменнную 

const squareOfTheCity = 'Square' //создал переменнную  squareOfTheCity  со значением 'Square' 
myCity[squareOfTheCity] ="Площадь 100 кв км"  //  и добавил типа как аппендом в обект 
console.table(myCity) //  а тут вывел через тэйбл
console.log(myCity)

//Доступ вот так к вложенной фигня инфобанды
console.log(myCity.infoBands.Nazi)

delete myCity.infoBands.Black

console.log(myCity)

// смешанный вариант добраться черед poin и bracket метод

delete myCity.infoBands['Nazi']

console.log(myCity)
console.log(myCity)




