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

 export default {
     randomString,
     getWebsiteHost
 }