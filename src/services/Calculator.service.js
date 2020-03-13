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
    case SUM: return Number(result) + Number(equation[index + 1]);
    case SUBTRACT: return Number(result) - Number(equation[index + 1]);
    case MULTIPLY: return Number(result) * Number(equation[index + 1]);
    case DIVIDE: return Number(result) / Number(equation[index + 1]);
    }

    return result;
});

const applyLastSymbolZeroRule = (equation, symbol) => {
    const isEquationEmpty = equation.length === 0;
    const isLastSymbolZero = !isEquationEmpty && equation[equation.length - 1] === 0;
    const newEquation = [...equation];

    if (isLastSymbolZero) {
        newEquation.splice(equation.length - 1, 1, symbol);
    } else {
        newEquation.push(symbol);
    }

    return newEquation;
};

const appendToEquation = (symbol, equation = []) => {
    const equationToAppend = symbol === OPERATIONS.EQUALS
        ? [calculate(equation)]
        : applyLastSymbolZeroRule(equation, symbol);

    return nextSymbol => nextSymbol === COMMANDS.DISPLAY
        ? equationToAppend.join(' ')
        : appendToEquation(nextSymbol, equationToAppend);
};

export const equation = symbol => appendToEquation(symbol);

export const display = fn => fn(COMMANDS.DISPLAY);
