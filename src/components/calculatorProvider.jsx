import React, { createContext, useState, useContext } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]); // Estado para almacenar los números seleccionados
    const [result, setResult] = useState(0);    // Estado para almacenar el resultado de la suma

    // Función para agregar un número y actualizar el resultado
    const addNumber = (num) => {
        setNumbers((prevNumbers) => [...prevNumbers, num]);
        setResult((prevResult) => prevResult + num);
    };

    // Función para restablecer la calculadora
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

// Hook personalizado para acceder al contexto
export const useCalculator = () => useContext(CalculatorContext);