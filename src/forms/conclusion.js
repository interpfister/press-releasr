import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Field } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap'

const ConclusionForm = (props) => (
  <Form model={props.model} onSubmit={(val) => this.handleSubmit(val)}>
    <ControlLabel>Style</ControlLabel>
    <Control.select model=".style" className="form-control">
      <option></option>
      <option value="old-world">Old World</option>
      <option value="new-world">New World</option>
    </Control.select>
    <ControlLabel>Climate</ControlLabel>
    <Control.select model=".climate" className="form-control">
      <option></option>
      <option value="cool">Cool</option>
      <option value="moderate">Moderate</option>
      <option value="warm">Warm</option>
    </Control.select>
  </Form>
);

// No need to connect()!
export default ConclusionForm;