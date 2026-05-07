import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecond) {
      setDisplay(String(digit));
      setWaitingForSecond(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

const handleOperator = (nextOp) => {
  const inputValue = parseFloat(display);

  if (firstOperand === null) {
    setFirstOperand(inputValue);
  } else if (operator) {
    const performCalc = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    const result = performCalc[operator](firstOperand, inputValue);
    setDisplay(String(result));
    setFirstOperand(result);
  }

  setWaitingForSecond(true);

  // Only update operator if it's not "="
  if (nextOp !== '=') {
    setOperator(nextOp);
  }
};


  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecond(false);
  };

  return (
    <div className="calculator bg-light p-4 rounded" style={{maxWidth: '300px'}}>
      <div className="display bg-white p-3 mb-3 text-end border">{display}</div>
      <div className="row g-2">
        {[7,8,9,'/'].map(val => (
          <div className="col-3" key={val}>
            <button className="btn btn-outline-secondary w-100" onClick={() => typeof val === 'number' ? inputDigit(val) : handleOperator(val)}>{val}</button>
          </div>
        ))}
        {[4,5,6,'*'].map(val => (
          <div className="col-3" key={val}>
            <button className="btn btn-outline-secondary w-100" onClick={() => typeof val === 'number' ? inputDigit(val) : handleOperator(val)}>{val}</button>
          </div>
        ))}
        {[1,2,3,'-'].map(val => (
          <div className="col-3" key={val}>
            <button className="btn btn-outline-secondary w-100" onClick={() => typeof val === 'number' ? inputDigit(val) : handleOperator(val)}>{val}</button>
          </div>
        ))}
        <div className="col-3"><button className="btn btn-outline-secondary w-100" onClick={() => inputDigit(0)}>0</button></div>
        <div className="col-3"><button className="btn btn-outline-secondary w-100" onClick={clear}>C</button></div>
        <div className="col-3"><button className="btn btn-outline-primary w-100" onClick={() => handleOperator('+')}>+</button></div>
        <div className="col-3"><button className="btn btn-primary w-100" onClick={() => handleOperator('=')}>=</button></div>
      </div>
    </div>
  );
};
export default Calculator;

