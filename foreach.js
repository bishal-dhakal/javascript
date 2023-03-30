const arr = [1,2,3,4,5];


// for( let i=0; i<arr.length; i++ ){
//     console.log(arr[i]);
// }

// arr.forEach( function(value,index){
//     console.log(index + " -> "+ value);
// })

const aArr = [2,3,4,5];

aArr.forEach( function(val,ind,arr){
    console.log(arr[ind] +100);
} )