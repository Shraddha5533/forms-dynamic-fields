import { useState } from 'react';
import './App.css';

function App() {
  // State management for dynamic email fields
  const [emails, setEmails] = useState([{ email: "" }]);

  // Handle change in input fields
  const handleChange = (index, event) => {
    const values = [...emails];
    values[index][event.target.name] = event.target.value;
    setEmails(values);
  };

  // Handle adding a new email field
  const handleAddFields = () => {
    setEmails([...emails, { email: "" }]);
  };

  // Handle removing an email field
  const handleRemoveFields = (index) => {
    const values = [...emails];
    values.splice(index, 1);
    setEmails(values);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Emails: ", emails);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {emails.map((emailField, index) => (
          <div key={index}>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={emailField.email}
              onChange={(event) => handleChange(index, event)}
            />
            {emails.length > 1 && (
              <button type="button" onClick={() => handleRemoveFields(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddFields}>
          Add Email
        </button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
