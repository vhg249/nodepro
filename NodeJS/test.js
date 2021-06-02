function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hello(a, b) {
    return a+b
}

async function asyn_hello(a, b) {
    var c = await hello(a, b)
    var d = await asyn_hello2(3, 1)
    return d
}

async function asyn_hello2(a, b) {
    await sleep(2000);
    return a-b
}

// var ac = asyn_hello(1, 2)
// console.log(ac)
asyn_hello(1, 2).then((rs) => {
    console.log(rs)
})

var c = hello(1, 2)
console.log(c)