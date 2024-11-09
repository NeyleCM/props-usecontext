// src/components/Calculator.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCalculator } from './CalculatorProvider';

const Calculator = () => {
  const { addNumber } = useCalculator();

  const handleClick = (num) => {
    addNumber(num);
  };

  return (
    <>
    <div className="calculator">
      <h2>Calculadora</h2>
      <div className="button-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
      <Link to="/resultado">Resultado</Link>
    </div>
    </>
  );
};

export default Calculator;