import PropTypes from "prop-types";
import Button from "./Button";

function Header({ onShow, showAddTask }) {
  return (
    <div className="header">
      <h2>Task Tracker</h2>
      <Button
        text={`${showAddTask ? "close" : "add"}`}
        color={`${showAddTask ? "red" : "green"}`}
        onClick={onShow}
      />
    </div>
  );
}

export default Header;

Header.propTypes = { showAddTask: PropTypes.boolean, onShow: PropTypes.func };
