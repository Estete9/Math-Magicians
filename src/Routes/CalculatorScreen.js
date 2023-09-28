import styles from '../styles/calculatorScreen.module.css';
import Calculator from '../components/Calculator';

function CalculatorScreen() {
  return (
    <div className={styles.calculatorScreenWrapper}>
      <h1>Let&apos;s do Math!</h1>
      <Calculator />
    </div>
  );
}

export default CalculatorScreen;
