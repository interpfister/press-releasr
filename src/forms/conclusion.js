import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Field } from 'react-redux-form';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap'

const ConclusionForm = (props) => (
  <Form model={props.model} onSubmit={(val) => this.handleSubmit(val)}>
    <h4>Initial Conclusion</h4>
    <ControlLabel>Style</ControlLabel>
    <Control.select model=".style" className="form-control">
      <option></option>
      <option value="Old World">Old World</option>
      <option value="New World">New World</option>
    </Control.select>
    <ControlLabel>Climate</ControlLabel>
    <Control.select model=".climate" className="form-control">
      <option></option>
      <option value="Cool">Cool</option>
      <option value="Moderate">Moderate</option>
      <option value="Warm">Warm</option>
    </Control.select>
    <ControlLabel>Age</ControlLabel>
    <Control.select model=".age" className="form-control">
      <option></option>
      <option value="1-3">1-3</option>
      <option value="3-5">3-5</option>
      <option value="5-10">5-10</option>
      <option value="10+">10+</option>
    </Control.select>
    <hr />
    <h4>Final Conclusion</h4>
    <ControlLabel>Vintage</ControlLabel>
    <Control.text model=".vintage" className="form-control" />
    <ControlLabel>Varietals</ControlLabel>
    <Control.text model=".varietals" className="form-control" />
    <ControlLabel>Country</ControlLabel>
    <Control.text model=".country" className="form-control" />
    <ControlLabel>Region</ControlLabel>
    <Control.text model=".region" className="form-control" />
    <ControlLabel>Sub-Region</ControlLabel>
    <Control.text model=".subregion" className="form-control" />
    <ControlLabel>Quality Level</ControlLabel>
    <Control.text model=".quality" className="form-control" />
    <ControlLabel>Other Observations</ControlLabel>
    <Control.textarea model=".otherObservations" className="form-control" />
    <hr />
  </Form>
);

// No need to connect()!
export default ConclusionForm;
