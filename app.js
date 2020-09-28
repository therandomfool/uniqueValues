// return true only if all values are unique, otherwise false
// using Array, Object and string method

function unique(str) {

for(let i = 0; i < str.length; i ++) {
    if(str.lastIndexOf(str[i]) !== i){
        return false
    }
}


// let values = {};
// for (let letter of str) {
//     if(values[letter]) {
//         return false;
//     }
//     values[letter] = 'exists';
// } 

// let values = [];
// for (let letter of str) {
//    if(values.indexOf(letter) !== -1) {
//        return false;
//    }
//    values.push(letter);
// }



return true;
}




console.log(unique("abcde"));
console.log(unique("abachdesfb"));