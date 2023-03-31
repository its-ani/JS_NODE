let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let code = document.getElementById('code')


btnEncrypt.onclick = function(){
    let data = code.value
    data = encryptData(data)
    code.value = data
}

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
        console.log(i+ " " + ret)  
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


btnEncode.onclick = function(){
    let data = inpCode.value
    data = btoa(data)
    code.value = data
} 