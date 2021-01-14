class MathUtilities {


    add(baseValue, valueToAdd){
        let res = baseValue + valueToAdd;
        return res;
    }

    subtract(baseValue, valueToAdd){
       let res = baseValue - valueToAdd;
        return res;
    }

    divide(baseValue, valueToAdd){
        let res = baseValue / valueToAdd;
        return res;
    }

    multiply(baseValue, valueToAdd){
        let res = baseValue * valueToAdd;
        return res;
    }
}

module.exports = MathUtilities;