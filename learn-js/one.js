let numbers=[10,20,30,40]
//let num = numbers.find(ele => ele == 21)

let num = numbers.find((num)=>{
    return num === 21;
})
console.log(num)