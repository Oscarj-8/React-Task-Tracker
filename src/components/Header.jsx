import Button from "./Button";

function Header() {
  return (
    <div className="header">
      <h2>Task Tracker</h2>
      <Button title="Add" color="green" />
    </div>
  );
}

export default Header;
