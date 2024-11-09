import React, { createContext, useState, useContext } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]); 
    const [result, setResult] = useState(0);   

    const addNumber = (num) => {
        setNumbers((prevNumbers) => [...prevNumbers, num]);
        setResult((prevResult) => prevResult + num);
    };

    const resetCalculator = () => {
        setNumbers([]);
        setResult(0);
    };

    return (
        <>
        <CalculatorContext.Provider value={{ numbers, result, addNumber, resetCalculator }}>
            {children}
        </CalculatorContext.Provider>
        </>
    );
};

export const useCalculator = () => useContext(CalculatorContext);