let convertCapital = names => {
    const allNames = [];
    for(let name of names){
        name = name.charAt(0).toUpperCase() + name.slice(1);
        allNames.push(name);
    }
    console.log(allNames);
}

convertCapital(["alice", "bob", "charlie"]);
