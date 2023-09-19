import PropTypes from 'prop-types';

function Calculator() {
  return (
    <article id="calculator-wrapper">
      <Display content="0" />
      <section id="buttons-grid">
        <Button content="AC" section="support" />
        <Button content="+/-" section="support" />
        <Button content="%" section="support" />
        <Button content="÷" section="operations" />
        <Button content="7" section="number" />
        <Button content="8" section="number" />
        <Button content="9" section="numbers" />
        <Button content="x" section="operations" />
        <Button content="4" section="number" />
        <Button content="5" section="number" />
        <Button content="6" section="number" />
        <Button content="-" section="operations" />
        <Button content="1" section="number" />
        <Button content="2" section="number" />
        <Button content="3" section="number" />
        <Button content="+" section="operations" />
        <Button content="0" section="lowerRow" />
        <Button content="." section="lowerRow" />
        <Button content="=" section="lowerRow" />
      </section>
    </article>
  );
}

function Button({ content, section }) {
  let btnID = '';
  const classNames = `button ${section}`;

  if (content === '0') {
    btnID = 'zero';
  } else {
    btnID = content;
  }

  return (
    <button className={classNames} id={btnID} type="button">
      {content}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};

function Display() {
  return <input id="display" placeholder="0" />;
}

export default Calculator;
