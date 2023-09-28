import React, { useState, useEffect } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';
import styles from '../styles/calculatorScreen.module.css';

const calcButtons = [
  { section: 'support', content: 'AC', id: 'AC' },
  { section: 'support', content: '+/-', id: 'signChange' },
  { section: 'support', content: '%', id: 'modulo' },
  { section: 'operations', content: '÷', id: 'divide' },
  { section: 'number', content: '7', id: 'seven' },
  { section: 'number', content: '8', id: 'eight' },
  { section: 'number', content: '9', id: 'nine' },
  { section: 'operations', content: 'x', id: 'multiply' },
  { section: 'number', content: '4', id: 'four' },
  { section: 'number', content: '5', id: 'five' },
  { section: 'number', content: '6', id: 'six' },
  { section: 'operations', content: '-', id: 'subtract' },
  { section: 'number', content: '1', id: 'one' },
  { section: 'number', content: '2', id: 'two' },
  { section: 'number', content: '3', id: 'three' },
  { section: 'operations', content: '+', id: 'addition' },
  { section: 'lowerRow', content: '0', id: 'zero' },
  { section: 'lowerRow', content: '.', id: 'dot' },
  { section: 'lowerRow', content: '=', id: 'equals' },
];

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
    <article className={styles.calculatorWrapper}>
      <section className={styles.buttonsGrid}>
        <Display content={displayState} />
        {calcButtons.map((btn) => (
          <React.Fragment key={btn.content}>
            <Button
              section={btn.section}
              content={btn.content}
              id={btn.id}
              clickHandler={clickHandler}
            />
          </React.Fragment>
        ))}
      </section>
    </article>
  );
}

export default Calculator;
