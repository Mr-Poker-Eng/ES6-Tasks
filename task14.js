const reverseNumber = (number) => {
    const reverseNum = parseInt(number.toString().split("").reverse().join(""));
    return reverseNum
    }
    console.log(reverseNumber(12345));
