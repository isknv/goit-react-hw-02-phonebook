import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class ImputForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  nameId = uuidv4();
  numberId = uuidv4();

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitContacts = e => {
    e.preventDefault();
    const { name, value } = this.state;
    this.props.addContacts(name, value);
    this.setState({ name: " ", number: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitContacts} className="form-horizontal">
          <div className="container-name">
            <p>Name</p>
            <InputGroup className="mb-3">
              <FormControl
                name="name"
                aria-label="Text input with checkbox"
                type="text"
                required
                id={this.nameId}
                value={this.state.name}
                onChange={this.inputChange}
              />
            </InputGroup>
          </div>
          <div className="container-number">
            <p>Number</p>
            <InputGroup className="mb-3">
              <FormControl
                name="number"
                aria-label="Text input with checkbox"
                type="tel"
                required
                id={this.numberId}
                value={this.state.number}
                onChange={this.inputChange}
              />
            </InputGroup>
          </div>
          <Button className="btn-form" type="submit" variant="outline-success">
            Add contact
          </Button>
        </form>
      </>
    );
  }
}

ImputForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};

export default ImputForm;
