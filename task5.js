const array1 = [5, 10, 15, 20, 25]

const updateArray = array1.find(function(number) {
    if(number > 15){
        return number;
    }
})

console.log(updateArray)