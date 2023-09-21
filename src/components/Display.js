import PropTypes from 'prop-types';

function Display({ content }) {
  return <input id="display" placeholder="0" value={content} />;
}

export default Display;

Display.propTypes = {
  content: PropTypes.string.isRequired,
};
