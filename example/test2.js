const express = require('express')

app = express()

async function sum(a, b) {
    return a+b
}

app.use('/hello', async function (rq, rs) {
    var a = await sum(1, 2)
    rs.json({nam: a})
    return
})

app.use('/hello3', function (rq, rs) {
    rs.json({nam: rq.mycustom})
    return
})

app.listen(3000)