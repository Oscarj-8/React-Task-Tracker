import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

function Header({ onShow, showAddTask }) {
  const location = useLocation();

  return (
    <div className="header">
      <h2>Task Tracker</h2>
      {location.pathname === "/" && (
        <Button
          text={showAddTask ? "Close" : "Add"}
          color={showAddTask ? "red" : "#4CAEFF"}
          onClick={onShow}
        />
      )}
    </div>
  );
}

export default Header;

Header.propTypes = {
  onShow: PropTypes.func,
  showAddTask: PropTypes.bool,
};
