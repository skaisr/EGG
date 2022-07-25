const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve(`async!!!`),2000)
        : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig)
    console.log('finally')
}


console.log('Before')

anotherFn();

console.log('After')