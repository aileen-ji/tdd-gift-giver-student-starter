const { BadRequestError } = require("../utils/errors");

class GiftExchange{
    static pairs(names){
        if(names.length % 2 == 1){
            throw new BadRequestError()
        }
        const half = Math.ceil(names.length / 2)
        let array1 = names.slice(0, half)
        let array2 = names.slice(-half)
        array1 = array1.sort(() => 0.5 - Math.random());
        array2 = array2.sort(() => 0.5 - Math.random());
        let pairings = []
        while(array1.length != 0 && array2.length != 0){
            let name1 = array1.pop()
            let name2 = array2.pop()
            pairings.push([name1, name2])
        }
        console.log(Array.isArray(pairings))
        return pairings
    }
    static traditional(names){
        let array1 = [...names]
        let array2 = [...names]
        
        array1 = array1.sort(() => 0.5 - Math.random());
        array2 = array2.sort(() => 0.5 - Math.random());

        let matches = []
        while(array1.length != 0 && array2.length != 0){
            let name1 = array1.pop()
            let name2 = array2[0]
            if(name2 == name1){
                name2 = array2.pop()
            }
            else{
                array2.splice(array2[0], 1)
            }
            let string = name1 + " is giving a gift to " + name2;
            matches.push(string)
        }
        return matches
    }
}

module.exports = GiftExchange