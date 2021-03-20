
const rapid = (myString) => {
    let consonants = [];
    newString = myString.toLowerCase()
    for(let position in newString){
        if(['a','e','i','o','u'].includes(newString[position]) == false){   
            consonants.push(newString[position]) 
        }               
    };
    stringsConsonants = consonants.join('') //pasa de [] a '' 
    //las funciones .toLowerCase() y .toUpperCase() no se pueden aplicar a arrays
    return stringsConsonants.toUpperCase()
    
}
        

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));