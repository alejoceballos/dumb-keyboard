import React, { useState } from 'react';
import Keyboard from '../keyboard';
import Key from '../keyboard/key';

const CalculatorMachine = () => {
    const [equation, setEquation] = useState('');

    const handleEquation = keyValue => {
        if (keyValue !== '=') {
            setEquation(`${equation}${keyValue}`);
        } else {
            setEquation(`${eval(equation)}`);
        }
    };

    const keys = [
        <Key key="calc-key-1" value="1" onClick={handleEquation}>1</Key>,
        <Key key="calc-key-add" value="+" onClick={handleEquation}>+</Key>,
        <Key key="calc-key-equals" value="=" onClick={handleEquation}>=</Key>
    ];

    return (
        <>
            <span data-qa="result-display">{equation}</span>
            <Keyboard keys={keys} />
        </>
    );
};

export default CalculatorMachine;
