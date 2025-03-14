// const removeVowels = (sentence) => {
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u') {
//             return sentence.remove(sentence[i]);
//         }
//     }
// }

// console.log(removeVowels("This is a test sentence"));

// const removeVowels = (sentence) => {
//     return sentence.replace(/[aeiouAEIOU]/g, "");
// };

// console.log(removeVowels("This is a test sentence")); 


const removeVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (const char of str) {
    if (!vowels.includes(char)) {
    result += char;
    }
    }
    return result;
    };
    console.log(removeVowels("Hello World"));
