// let navItem = ["Home","Shop","About","Contact"]

// navItem.map(function(item){
//     console.log(item);
// })

// navItem.forEach(function(item){
//     console.log(`[${item}] ${index}`);
// })

// let num = [1,2,3,4,5,6,7,8]

// let result = num.find(function(item){
//     return item<5
// })

// console.log(result);

// let res =num.filter((item)=>{
//  return item < 5
// })

// console.log(res);

// let collection =["rupesh","ritesh","parth","utkasrh"]

// for(let property in collection){
//     console.log(collection[property]);
// }

// for (let value of collection){
//     console.log(value);
// }


const fs = require("fs")

const file = fs.readFile('./Object Type/data/mobile.json',"utf-8",(err,data)=>{
   return data
})


fetch(file).then(async(res)=>{
   const json = await res.json();

   console.log(json)
})