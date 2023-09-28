import PropTypes from 'prop-types';
import styles from '../styles/calculatorScreen.module.css';

function Button({
  section, content, id, clickHandler,
}) {
  const combinedClasses = `${styles.button} ${styles[section]}`;
  return (
    <button
      id={styles[id]}
      className={combinedClasses}
      type="button"
      onClick={() => {
        clickHandler(content);
      }}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  section: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
