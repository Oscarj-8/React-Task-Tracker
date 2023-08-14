import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`${task.reminder ? "reminder" : ""} task`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
};
