(() => {
    const concateSequenceMathExpressions = require("./concateSequenceMathExpressions")

    const expression1 = [{ exponent: 2, baseValue: 2 }, { exponent: 1, baseValue: -3 }, { exponent: 0, baseValue: 3 }];
    const expression2 = [{ exponent: 3, baseValue: 2 }, { exponent: 2, baseValue: -7 }, { exponent: 1, baseValue: 13 }];
    console.log(`${JSON.stringify(expression1)} plus ${JSON.stringify(expression2)} equals ${JSON.stringify(concateSequenceMathExpressions(expression1, expression2))}`);
})();