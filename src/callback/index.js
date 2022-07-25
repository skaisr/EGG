function sum(num,num2){
    return (num * 1) + (num2 * 1);
}

function res(num,num2){
    return num - num2;
}

function mul(num,num2){
    return num * num2;
}

function cdiv(num,num2){
    return num / num2;
}

function gretting(name){
    console.log(`hola ${name}`);
}

function calc(num, num2, callback){
    return callback(num, num2);
}

setTimeout( gretting,5000,"Skais");

setTimeout(function(){
    console.log(calc(2,2,sum))
},4000)

setTimeout(function(){
    console.log(calc(2,2,res))
},3000)

setTimeout(function(){
    console.log(calc(2,5,mul))
},2000)

setTimeout(function(){
    console.log(calc(6,2,cdiv))
},1000)


const promise = Promise.resolve('hey!');

const cows =17;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows on the far,`)
    } else {
        reject('There is no cowa on the farm')
    }
})

countCows.then((result) =>{
    console.log(result);
}).catch((error)=> {
    console.log(error)
}).finally(()=> console.log ('Finally'));