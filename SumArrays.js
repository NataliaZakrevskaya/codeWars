function sum (numbers) {
    "use strict";
    if(numbers.length === 0){
        return 0
    } else if(numbers.length === 1){
        return numbers[0]
    } else {
        return numbers.reduce((a, b) => a + b)
    }
};