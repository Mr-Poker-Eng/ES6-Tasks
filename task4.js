const array1 = [10, 20, 25, 30, 35, 40]


const newArray = array1.filter(number => {
    if(number > 30){
        return number;
    }
})

console.log(newArray)