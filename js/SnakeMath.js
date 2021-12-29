let SnakeMath = (() => {

    let multiplesOf2 = (numbers) => numbers.filter(n => !(n % 2));

    let getNumberMultipleOf2 = () => {
        let numberFound = false;
        let number = 0;

        while (!numberFound) {
            let found = SnakeMath.multiplesOf2([Math.floor(Math.random() * 147 + 1)])

            if (found.length) {
                number = found[0];
                numberFound = true;
            }
        }

        return number;
    };

    return {
        multiplesOf2: multiplesOf2,
        getNumberMultipleOf2: getNumberMultipleOf2
    }
})();