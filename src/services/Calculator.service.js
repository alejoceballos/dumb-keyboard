const COMMANDS = {
    DISPLAY: '__DiSPlAy__'
};

export const OPERATIONS = {
    SUM: '+',
    SUBTRACT: '-',
    MULTIPLY: 'x',
    DIVIDE: '÷',
    EQUALS: '='
};

const calculate = equation => equation.reduce((result, current, index, equation) => {
    const { SUM, SUBTRACT, MULTIPLY, DIVIDE } = OPERATIONS;

    switch (current) {
    case SUM: return result + Number(equation[index + 1]);
    case SUBTRACT: return result - Number(equation[index + 1]);
    case MULTIPLY: return result * Number(equation[index + 1]);
    case DIVIDE: return result / Number(equation[index + 1]);
    }

    return result;
});

const appendToEquation = (symbol, equation = []) => {
    // Validate symbol:
    //   1) Must be an integer from 0 to 9, a dot, an operation or a command
    //   2) If the equation is empty, must be an integer from 0 to 9
    //   3) If the last element is an operation can only accept an integer from 0 to 9
    //   4) If the symbol is a dot, the last element must be an integer from 0 to 9
    //   5) If the last element is any integer concatenated with a dot, the symbol must be an integer from 0 to 9
    //   6) If the last element is only 0, the symbol cannot be another 0

    // Operations:
    //  1) If the symbol is a number and the last element is also a number, they must be concatenated and the last element must be replaced by the result of the concatenation
    //  2) If the symbol is a dot and the last element is an integer, they must be concatenated and the last element must be replaced by the result of the concatenation
    //  3) If the symbol is a number and the last element is any integer concatenated with a dot, they must be concatenated and the last element must be replaced by the result of the concatenation
    //  4) If the symbol is a number and the last element is only a 0, the 0 must be replaced by the symbol
    //  5) If the symbol is an operation, must be added as a new element
    //  5) If the symbol is an EQUALS operation the equation must be calculated, cleared and the result added to it

    const equationToAppend = symbol === OPERATIONS.EQUALS ? [calculate(equation)] : [...equation, symbol];

    return symbol => symbol === COMMANDS.DISPLAY
        ? equationToAppend.join(' ')
        : appendToEquation(symbol, equationToAppend);
};

export const equation = symbol => appendToEquation(symbol);

export const display = fn => fn(COMMANDS.DISPLAY);
