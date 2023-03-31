const express = require("express")
const app = express()

app.use('/', express.static(__dirname + '/public'))


function encryptData(char){
    temp = ""
    ans = ""

    for(i of char){
        let ret = caseType(i);
        if(ret == 'Capital letter'){
            temp = i.toLowerCase()
        }
        else if(ret == "Small letter"){
            temp = i.toUpperCase()
        }
        else{
            temp += i
        }
        ans += temp;
        temp = ""
        // console.log(i+ " " + ret)
    } 
    return ans   
}

function caseType(char){
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        return "Capital letter";
    } else if (code >= 97 && code <= 122) {
        return "Small letter";
    } else {
        return "Not a letter";
    }
}

function decodeQueryParams(req,res,next){
    temp = ""
    fin = ""
    for(let q in req.query){
        temp = encryptData(req.query[q])
        // fin += temp
        // temp = ""
        req.query[q] = temp
    }
    // req.query = fin
    next()
}

function decodeQueryBase64(req,res,next){
    for(let q in req.query){
        let data = req.query[q]
        data = new Buffer(data,'base64').toString('ascii');
        req.query[q] = data
    }
    next()
}


app.get('/eval', decodeQueryParams,decodeQueryBase64,(req,res) => {
    console.log(req.query)
    Val = req.query.code
    console.log(Val)
    // ans = eval(Val)
    // res.send("+++++++++++EVAL++++++++++\t || " + Val + " ||\n = " + ans) // To return the answer of te js code
    res.send("+++++++++++EVAL++++++++++\t || " + Val)
})


app.listen(4545,()=>{
    console.log("server started on http://localhost:4545")
})
