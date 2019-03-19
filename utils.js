function isEmptyObject(obj){
    for (var key of obj){
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}

function isEmptyArray(arr){
    if (Array.isArray(arr) && arr.length === 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isEmptyObject,
    isEmptyArray
}