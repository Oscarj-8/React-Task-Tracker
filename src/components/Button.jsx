import PropTypes from "prop-types";

const Button = ({ title, color }) => {
  return <button style={{ backgroundColor: color }}>{title} </button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Button;
