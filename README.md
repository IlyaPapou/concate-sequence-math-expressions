# concate-sequence-math-expressions

Utility function to add simple mathematical expressions.

## Installation
```
git clone [repo];
npm install
```
Add the following import to your code:
```
import concateSequenceMathExpressions from './sequenceMathExpressions/index';
```
## Usage

**concateSequenceMathExpressions** - it is the main function, which receives any length of arguments in a special format - *Expression*, and concatenates them to one.
```
function concateSequenceMathExpressions(...args: Expression[]): Expression
```
Each value should be presented as an array of objects:

```
type Expression = Item[]

type Item = {
    exponent: number;
    baseValue: number;
}
```
#### Example
2x\*\*2 - 3x + 3 will be presented in next format:

```
[
  { exponent: 2, baseValue: 2 },
  { exponent: 1, baseValue: -3 },
  { exponent: 0, baseValue: 3 },
]
```
## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner.

### `npm example`

Launches the function from index.js, which calls the main function with preset arguments and shows the **output** in console.