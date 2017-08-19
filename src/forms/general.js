import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap'


const TextArea = () => (<FormControl componentClass="textarea" placeholder="textarea" />);

class ConclusionForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  

  render() {
    return (
      <Form model="general" onSubmit={(val) => this.handleSubmit(val)}>
        <ControlLabel>General Tasting Notes</ControlLabel>
        <Control model=".tastingNotes" component={TextArea} />



        <button>Submit!</button>
      </Form>
    );
  }
}

// No need to connect()!
export default ConclusionForm;