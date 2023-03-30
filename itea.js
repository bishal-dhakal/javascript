const arr = [1,2,3,4,5];

//for of and for in loops

// for(items of arr){
//     console.log(items)
// }

// for(items of 'mynameiskhan'){
//     console.log(items)
// }

//for in to loop through  properties of an objects

const info = {
    name: 'bishal',
    age : 24,
    deg : 'Software'
}

for( prop in info){
    console.log(prop);
}