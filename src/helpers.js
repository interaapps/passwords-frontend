function randomString(length, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    let result           = '';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getWebsiteHost(url){
    if (url) {
        if (url.includes("://"))
        url = url.split("://")[1]
        
        if (url.includes("/"))
        url = url.split("/")[0]
    }
    console.log(url)
    return url
}

function copyStringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}


 export default {
     randomString,
     getWebsiteHost,
     copyStringToClipboard
 }