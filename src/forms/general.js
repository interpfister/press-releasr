import React from 'react';
import { ControlLabel } from 'react-bootstrap'

import { Field, reduxForm } from 'redux-form'

const GeneralForm = props => {
  return (
    <form>
      <ControlLabel>General Tasting Notes</ControlLabel>
      <Field name="tastingNotes" component="textarea" className="form-control" />
    </form>
  )
}

const ConnectedGeneralForm = reduxForm({
  form: 'general',
  destroyOnUnmount: false,
})(GeneralForm);

export default ConnectedGeneralForm;