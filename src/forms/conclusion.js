import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap'


//const TextArea = <FormControl componentClass="textarea" placeholder="textarea" />

const ConclusionForm = () => (
  <Form model="conclusion" onSubmit={(val) => this.handleSubmit(val)}>
    <ControlLabel>General Tasting Notes</ControlLabel>
    <Control model=".name" component={FormControl} />
    <button>Submit!</button>
  </Form>
);

// No need to connect()!
export default ConclusionForm;