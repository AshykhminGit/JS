const myCity = {
    city: 'New York',  //  этос свойство облекта
    cityGreeting: function () {    // а это метод обекта. это фунция внутри метода внутри обьекта
        console.log('Greetings guys!!')
    }
}

myCity.cityGreeting( )

const myCity1 = {
    city: 'New York',
    cityGreeting () {    // это фунция внутри метода внутри обьекта  только короче потому вырезали : function   и тоже нормально работает
        console.log('Greetings guys!!')
    }
}

// без круглых скобок черз точку вызываем свойства оббекта
console.log  (myCity1.city)

//с круглыми скобками вызов методов и функций 
myCity1.cityGreeting( )

//JSON  это javascript obkect notation   это формат обмена данными 

//JSON.parse() //  это распарсиить данные с сервака например
//JSON.stringify() // это из js  воткнуть в JSON   

const post ={
title: 'My post',
likesQty: 5

}

JSON.stringify(post)

console.log(post)

//  МОЙ ПЕРВЫЙ ПАРСИНГ
// > const post ={
//     ... title: 'My post',
//     ... likesQty: 5
//     ...
//     ... }
//     undefined
//     > post
//     { title: 'My post', likesQty: 5 }
//     > JSON.stringify(post)     ----------  запарсил
//     '{"title":"My post","likesQty":5}'
//     > const postStr = JSON.stringify(post)
//     undefined
//     > JSON.parse(postStr)   --------------- распарсил
//     { title: 'My post', likesQty: 5 }//
    
