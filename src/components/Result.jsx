import React from 'react';
import { Link } from 'react-router-dom';
import { useCalculator } from './CalculatorProvider';

const Result = () => {
  const { numbers, result, resetCalculator } = useCalculator();

  return (
    <>
    <div className="result">
      <h2>Resultado</h2>
      <h3>Suma de números:</h3>
      <div className="selected-numbers">
        {numbers.map((num, index) => (
          <span key={index} className="number-bubble">{num}</span>
        ))}
      </div>
      <div className="total-result">Total: {result}</div>
      <button onClick={resetCalculator} className='reset'>Resetear</button>
      <Link to="/">Volver a la calculadora</Link>
    </div>
    </>
  );
};

export default Result;