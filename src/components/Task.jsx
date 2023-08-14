import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.title} <FaTimes onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
};
