import Quote from '../components/Quote';
import styles from '../styles/quoteScreen.module.css';

function QuoteScreen() {
  return (
    <div className={styles.quoteScreenWrapper}>
      <Quote />
    </div>
  );
}

export default QuoteScreen;
