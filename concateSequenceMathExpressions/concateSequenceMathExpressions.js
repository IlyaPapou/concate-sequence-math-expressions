const isAllExpressionsAreArrays = (expressions) => !expressions.some((expression) => !Array.isArray(expression));
const isValidProperties = ({ exponent, baseValue }) => Number.isInteger(exponent) && Number.isInteger(baseValue);
const isExpressionItemValid = (item) => !!item && typeof item === 'object' && isValidProperties(item);
const isInvalid = (item) => !isExpressionItemValid(item);

const concateSequenceMathExpressions = (...expressions) => {
    if (!expressions.length) throw new Error('Please add arguments');
    if (!isAllExpressionsAreArrays(expressions)) throw new Error('All expressions should be passed as arrays');

    const expressionsItems = expressions.flat(1);
    
    if (!expressionsItems.length || expressionsItems.some(isInvalid)) throw new Error("There is some item which doesn't have required format");
    
    const temporary = [];
    const result = [];

    for (let i = 0; i < expressionsItems.length; i++) {
        const { exponent } = expressionsItems[i];
        if (temporary.includes(exponent)) continue;
        temporary.push(exponent);
        result.push({
            exponent: exponent,
            baseValue: expressionsItems.reduce((summaryBase, { exponent: e, baseValue }) => 
                e === exponent ? summaryBase + baseValue : summaryBase, 0
            ),
        });
        
    }
    return result;
};

module.exports = {
    concateSequenceMathExpressions,
    isExpressionItemValid,
    isAllExpressionsAreArrays,
    isValidProperties,
};