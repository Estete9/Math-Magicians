import PropTypes from 'prop-types';

function Button({ content, section, clickHandler }) {
  let btnID = '';
  const classNames = `button ${section}`;

  if (content === '0') {
    btnID = 'zero';
  } else {
    btnID = content;
  }

  return (
    <button
      className={classNames}
      id={btnID}
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
  content: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
