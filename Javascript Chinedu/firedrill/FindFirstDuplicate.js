function duplicate(array){
    let defaultValue = -1;
    for(let vary = 0; vary < array.length; vary++){
        for(let index = vary + 1; index < array.length; index++){
            if(array[vary] == array[index]){
                defaultValue = array[index];
                return defaultValue;
            }
        }
    }
    return defaultValue;
}

module.exports = {duplicate};

let value = duplicate([3, 9, 5, 7,8, 4, 3]);
console.log(value);