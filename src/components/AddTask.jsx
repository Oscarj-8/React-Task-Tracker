import { PropTypes } from "prop-types";
import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setError("Please add a task");
    } else {
      setError("");
    }

    onAddTask({ title, day, reminder });

    setTitle("");
    setDay("");
    setReminder(false);
  };

  function handleChange(e) {
    setTitle(e.target.value);
    setError("");
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Add a task"
          value={title}
          onChange={handleChange}
        />
      </div>

      {error && (
        <p className="error-message">
          {error} <FaAsterisk size={10} />
        </p>
      )}
      <div className="form-control">
        <label htmlFor="day&time">Day and Time</label>
        <input
          type="text"
          id="day&time"
          name="day&time"
          placeholder="Add day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control checkbox-section">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          id="reminder"
          name="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Save task"
        className={`submit-btn ${!title ? "disabled" : ""}`}
        disabled={!title}
      />
    </form>
  );
};

export default AddTask;

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
