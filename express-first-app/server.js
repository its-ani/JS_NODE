const express = require('express')
const app = express()

app.get('/hello', (req,res)=>{
    let name = 'Guest'
    if(req.query.user) {
        name = req.query.user
    }
    res.send("Hello World "+ name)
})

app.use('/xyz', express.static(__dirname + '/public'))
// app.use('/abc', express.static(__dirname + '/public'))

app.listen(4321, ()=>{
    console.log("server started on http://localhost:4321")
})

// if we open a folder to by default its index.html will open if it is present.