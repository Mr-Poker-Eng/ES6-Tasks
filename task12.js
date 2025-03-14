// const getUserName = (name) => {
//         console.log(`${name.age}`)
// }

// getUserName({id: 1, name: "munim", age: 30})

const getUserName = (name) => {
    return name.name;
}

console.log(getUserName({id: 1, name: "munim", age: 30}));