import React from 'react';
import { ControlLabel } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { STATES } from 'us';

const renderStateOptions = () => {
  return STATES.map((state) => <option value={state.name} key={`state-option-${state.name}`}>{state.name}</option>);
}

const GeneralForm = props => {
  return (
    <form>
      <ControlLabel>General Tasting Notes</ControlLabel>
      <Field name="GROUP_NAME" component="input" className="form-control" placeholder="Group Name" />
      <Field name="DATE" component="input" className="form-control" placeholder="Date" />
      <Field name="TIME" component="input" className="form-control" placeholder="Time" />
      <Field name="LOCATION_NAME" component="input" className="form-control" placeholder="Location Name" />
      <Field name="LOCATION_ADDRESS" component="input" className="form-control" placeholder="Location Address" />
      <Field name="STATE" component="select" className="form-control" placeholder="State">
        <option value="" key="state-option-blank">-- Select a state --</option>
        {renderStateOptions()}
      </Field>
      <Field name="CITY" component="input" className="form-control" placeholder="City" />
      <Field name="CONTACT_NAME" component="input" className="form-control" placeholder="Contact Name" />
      <Field name="CONTACT_EMAIL" component="input" className="form-control" placeholder="Contact Email" />
      <Field name="CONTACT_PHONE" component="input" className="form-control" placeholder="Contact Phone" />
    </form>
  )
}

const ConnectedGeneralForm = reduxForm({
  form: 'general',
  destroyOnUnmount: false,
})(GeneralForm);

export default ConnectedGeneralForm;