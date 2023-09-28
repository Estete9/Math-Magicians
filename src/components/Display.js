import PropTypes from 'prop-types';
import styles from '../styles/calculatorScreen.module.css';

function Display({ content }) {
  return <input id={styles.display} placeholder="0" value={content} />;
}

export default Display;

Display.propTypes = {
  content: PropTypes.string.isRequired,
};
