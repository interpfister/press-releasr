import React from 'react';
import { ControlLabel } from 'react-bootstrap'

import { Field, reduxForm } from 'redux-form'

const GeneralForm = props => {
  return (
    <form>
      <ControlLabel>General Tasting Notes</ControlLabel>
      <Field name="GROUP_NAME" component="input" className="form-control" placeholder="Group Name" />
      <Field name="DATE" component="input" className="form-control" placeholder="Date" />
      <Field name="TIME" component="input" className="form-control" placeholder="Time" />
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