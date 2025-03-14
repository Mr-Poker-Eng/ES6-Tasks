// const shortNames = (names) => {
//     return names.map((name) => {
//        return `${name[0]} (${name.length})`;
//     });
    
// }


// const shortNames = (names) => names.map(name => `${name[0]} (${name.length})`)

const shortNames = (array) => {
    let newArray = [];

    for(let arr of array){
        const element = arr.slice(0,1) + `(${arr.length})`;
        newArray.push(element)
    }
    return newArray;
}

console.log(shortNames(["Alice", "Bob", "Charlie"])); 