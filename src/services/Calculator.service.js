const COMMANDS = {
    DISPLAY: '__DiSPlAy__'
};

export const OPERATIONS = {
    SUM: '+'
};

const appendToEquation = (symbol, equation = []) => {
    // Validate symbol
    const equationToAppend = [...equation, symbol];
    return symbol => symbol === COMMANDS.DISPLAY
        ? equationToAppend.join(' ')
        : appendToEquation(symbol, equationToAppend);
};

export const equation = symbol => appendToEquation(symbol);

export const display = fn => fn(COMMANDS.DISPLAY);
