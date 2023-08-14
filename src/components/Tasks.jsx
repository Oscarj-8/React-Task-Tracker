import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
