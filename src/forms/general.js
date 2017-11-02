import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { STATES } from 'us';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './general.css';

import formDateFormat from '../helpers/date-format';

const renderStateOptions = () => {
  return STATES.map((state) => <option value={state.name} key={`state-option-${state.name}`}>{state.name}</option>);
}

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => {
  return (
  <div class="datepicker-wrapper">
        <DatePicker {...input} dateFormat={formDateFormat} selected={input.value ? moment(input.value, formDateFormat) : null} placeholderText={placeholder} className="form-control" />
        {touched && error && <span>{error}</span>}
  </div>
  );
}

const GeneralForm = props => {
  return (
    <form>
      <Field name="GROUP_NAME" component="input" className="form-control" placeholder="Group Name" />
      <Field name="DATE" component={renderDatePicker} className="form-control" placeholder="Date" />
      <Field name="TIME" component="input" className="form-control" placeholder="Time" />
      <Field name="LOCATION_NAME" component="input" className="form-control" placeholder="Location Name" />
      <Field name="LOCATION_ADDRESS" component="input" className="form-control" placeholder="Location Address" />
      <Field name="STATE" component="select" className="form-control">
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