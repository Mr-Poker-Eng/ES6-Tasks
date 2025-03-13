const values = array => {
    const uniqueArray = [];
    for(let arr of array){
        if(!uniqueArray.includes(arr)){
            uniqueArray.push(arr);
        }
    }
    console.log(uniqueArray)
}

values([1, 2, 3, 2, 1, 4, 5, 4, 7]);