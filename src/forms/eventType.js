import React from 'react';
import { Field, reduxForm } from 'redux-form'

const renderEventTypeOptions = (eventTypes) => {
  return eventTypes.map((eventType) => <option value={eventType} key={`event-type-option-${eventType}`}>{eventType}</option>);
}

const EventTypeForm = props => {
  return (
    <form>
      <Field name="EVENT_TYPE" component="select" className="form-control">
        <option value="" key="event-type-option-blank">-- Select event type --</option>
        {renderEventTypeOptions(props.eventTypes)}
      </Field>
    </form>
  )
}

const ConnectedEventTypeForm = reduxForm({
  form: 'eventType',
  destroyOnUnmount: false,
})(EventTypeForm);

export default ConnectedEventTypeForm;