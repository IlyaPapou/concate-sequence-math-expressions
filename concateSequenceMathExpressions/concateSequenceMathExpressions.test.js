const { concateSequenceMathExpressions, isExpressionItemValid, isAllExpressionsAreArrays, isValidProperties } = require("./concateSequenceMathExpressions");

const expression1 = [{
    exponent: 4,
    baseValue: -2
}];
const expression2 = [{
    exponent: 4,
    baseValue: 1
}, {
    exponent: 3,
    baseValue: 1
}];
const expression3 = [{
    exponent: 3,
    baseValue: 2
}];
const result = [{
    exponent: 4,
    baseValue: -1
},{
    exponent: 3,
    baseValue: 3
}]

describe('isValidProperties()', () => {
    it('should be valid', () => {
        expect(isValidProperties({ exponent: 1, baseValue: 1, })).toBe(true);
    });

    it('should be invalid for properties', () => {
        const invalidExpression = { exponent: '1', baseValue: true };
        expect(isValidProperties(invalidExpression)).toBe(false);
    });
})
describe('isAllExpressionsAreArrays()', () => {
    it('should be valid', () => {
        expect(isAllExpressionsAreArrays([[]])).toBe(true);
    });

    it('should be invalid for not arrays', () => {
        expect(isAllExpressionsAreArrays([{}])).toBe(false);
    });
})

describe('isExpressionItemValid()', () => {
    it('should be valid', () => {
        expect(isExpressionItemValid({ exponent: 1, baseValue: 1, })).toBe(true);
    });

    [null, undefined, [], {}, { foo: 'bar' }].forEach((arg) => {
        it(`should be invalid for arguments: ${JSON.stringify(arg)}`, () => {
            expect(isExpressionItemValid(arg)).toBe(false);
        })
    });
})

describe('concateSequenceMathExpressions()', () => {
    it('should return an array', () => {
        const result = concateSequenceMathExpressions(expression1, expression2, expression3);
        expect(Array.isArray(result)).toBe(true);
    });

    it('should calculate -2x**4 + x**4 + x**3 + 2x**3 = -x**4 + 3x**3', () => {
        expect(concateSequenceMathExpressions(expression1, expression2, expression3)).toEqual(result);
    });

    it('should throw error on empty arguments', () => {
        const fn = () => concateSequenceMathExpressions();
        expect(() => {fn()}).toThrowError('Please add arguments');
    });

    it('should throw error on wrong data type of arguments', () => {
        const fn = () => concateSequenceMathExpressions({});
        expect(() => {fn()}).toThrowError('All expressions should be passed as arrays');
    });

    it('should throw error on invalid format of arguments', () => {
        const fn = (args) => concateSequenceMathExpressions(args);
        expect(() => {fn([{foo: "bar"}], [])}).toThrowError("There is some item which doesn't have required format");
    });
});