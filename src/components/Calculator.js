import { useState, useEffect } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [displayState, setDisplayState] = useState('0');

  const updateDisplay = (calculator) => {
    if (calculator.next) {
      setDisplayState(calculator.next);
      return;
    }
    if (calculator.total) {
      setDisplayState(calculator.total);
      return;
    }
    setDisplayState('0');
  };

  useEffect(() => {
    updateDisplay(calculatorState);
  }, [calculatorState]);

  const clickHandler = (value) => {
    const newCalculator = calculate(calculatorState, value);
    setCalculatorState(newCalculator);
  };

  return (
    <article id="calculator-wrapper">
      <section id="buttons-grid">
        <Display content={displayState} />
        <Button content="AC" section="support" clickHandler={clickHandler} />
        <Button content="+/-" section="support" clickHandler={clickHandler} />
        <Button content="%" section="support" clickHandler={clickHandler} />
        <Button content="÷" section="operations" clickHandler={clickHandler} />
        <Button content="7" section="number" clickHandler={clickHandler} />
        <Button content="8" section="number" clickHandler={clickHandler} />
        <Button content="9" section="numbers" clickHandler={clickHandler} />
        <Button content="x" section="operations" clickHandler={clickHandler} />
        <Button content="4" section="number" clickHandler={clickHandler} />
        <Button content="5" section="number" clickHandler={clickHandler} />
        <Button content="6" section="number" clickHandler={clickHandler} />
        <Button content="-" section="operations" clickHandler={clickHandler} />
        <Button content="1" section="number" clickHandler={clickHandler} />
        <Button content="2" section="number" clickHandler={clickHandler} />
        <Button content="3" section="number" clickHandler={clickHandler} />
        <Button content="+" section="operations" clickHandler={clickHandler} />
        <Button content="0" section="lowerRow" clickHandler={clickHandler} />
        <Button content="." section="lowerRow" clickHandler={clickHandler} />
        <Button content="=" section="lowerRow" clickHandler={clickHandler} />
      </section>
    </article>
  );
}

export default Calculator;
