import PropTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.object,
};
