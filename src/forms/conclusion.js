import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ControlLabel } from 'react-bootstrap';

const ConclusionForm = (props) => (
  <form>
    <h4>Initial Conclusion</h4>
    <ControlLabel>Style</ControlLabel>
    <Field name="style" component="select" className="form-control">
      <option></option>
      <option value="Old World">Old World</option>
      <option value="New World">New World</option>
    </Field>
    <ControlLabel>Age</ControlLabel>
    <Field name="age" component="select" className="form-control">
      <option></option>
      <option value="1-3">1-3</option>
      <option value="3-5">3-5</option>
      <option value="5-10">5-10</option>
      <option value="10+">10+</option>
    </Field>
    <hr />
    <h4>Final Conclusion</h4>
    <ControlLabel>Vintage</ControlLabel>
    <Field name="vintage" component="input" type="text" className="form-control" />
    <ControlLabel>Varietals</ControlLabel>
    <Field name="varietals" component="input" type="text" className="form-control" />
    <ControlLabel>Country</ControlLabel>
    <Field name="country" component="input" type="text" className="form-control" />
    <ControlLabel>Region</ControlLabel>
    <Field name="region" component="input" type="text" className="form-control" />
    <ControlLabel>Sub-Region</ControlLabel>
    <Field name="subregion" component="input" type="text" className="form-control" />
    <ControlLabel>Quality Level</ControlLabel>
    <Field name="quality" component="input" type="text" className="form-control" />
    <ControlLabel>Other Observations</ControlLabel>
    <Field name="otherObservations" component="textarea" className="form-control" />
    <hr />
  </form>
);

const ConnectedConclusionForm = reduxForm({
  destroyOnUnmount: false,
})(ConclusionForm);
  
  export default ConnectedConclusionForm;