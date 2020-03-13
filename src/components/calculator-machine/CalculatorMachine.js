import React, { useState } from 'react';
import Keyboard from '../keyboard/Keyboard';
import Key from '../keyboard/key/Key';
import { display, equation } from '../../services/Calculator.service';

const CalculatorMachine = () => {
    const [persistedEquation, setPersistedEquation] = useState(() => equation(0));
    const handleEquation = keyValue => setPersistedEquation(() => persistedEquation(keyValue));

    const keys = [
        <Key key="calc-key-1" value="1" onClick={handleEquation}>1</Key>,
        <Key key="calc-key-2" value="2" onClick={handleEquation}>2</Key>,
        <Key key="calc-key-3" value="3" onClick={handleEquation}>3</Key>,
        <Key key="calc-key-4" value="4" onClick={handleEquation}>4</Key>,
        <Key key="calc-key-5" value="5" onClick={handleEquation}>5</Key>,
        <Key key="calc-key-6" value="6" onClick={handleEquation}>6</Key>,
        <Key key="calc-key-7" value="7" onClick={handleEquation}>7</Key>,
        <Key key="calc-key-8" value="8" onClick={handleEquation}>8</Key>,
        <Key key="calc-key-9" value="9" onClick={handleEquation}>9</Key>,
        <Key key="calc-key-0" value="0" onClick={handleEquation}>0</Key>,
        <Key key="calc-key-add" value="+" onClick={handleEquation}>+</Key>,
        <Key key="calc-key-subtract" value="-" onClick={handleEquation}>-</Key>,
        <Key key="calc-key-multiply" value="x" onClick={handleEquation}>x</Key>,
        <Key key="calc-key-divide" value="÷" onClick={handleEquation}>÷</Key>,
        <Key key="calc-key-equals" value="=" onClick={handleEquation}>=</Key>
    ];

    return (
        <>
            <span data-qa="result-display">{display(persistedEquation)}</span>
            <Keyboard keys={keys} />
        </>
    );
};

export default CalculatorMachine;
