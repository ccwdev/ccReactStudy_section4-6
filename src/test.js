import React from "react";
import ReactDOM from "react-dom";

class UserForm extends React.component {
  render() {
    return (
      <form>
        <label>Enter a username:</label>
        <input />
      </form>
    );
  }
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<UserForm />, document.querySelector("#root"));
