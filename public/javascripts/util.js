
// program to generate random strings
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//check if router matches existing link
function routerMatch(Arr, router) {
    let flag = false
    for(item in Arr){if(item['newRouter'] == router){flag = true}}
    return flag
}

module.exports={ generateString, routerMatch }