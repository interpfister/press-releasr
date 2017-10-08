import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, change } from 'redux-form';
import { ControlLabel } from 'react-bootstrap';

const ResultsForm = (props) => {
  const onCheckboxClick = (e) => {
    const fieldName = e.target.name.replace('Checked', '');
    let changeToValue = '';
    if(e.target.checked) {
      changeToValue = props.conclusionsData[fieldName];
    }
    props.change(fieldName, changeToValue);
  };

  const CheckboxField = (props) => (
    <Field component="input" type="checkbox" onClick={onCheckboxClick} {...props} />
  );

  return (<form>
    <h4>Initial Conclusion</h4>
    <ControlLabel>Style</ControlLabel>
    <div>
      <CheckboxField name="styleChecked" />
      <span>You put: {props.conclusionsData['style']}</span>
    </div>
    <Field name="style" component="select" className="form-control" disabled={props.styleChecked}>
      <option></option>
      <option value="Old World">Old World</option>
      <option value="New World">New World</option>
    </Field>
    <ControlLabel>Age</ControlLabel>
    <div>
      <CheckboxField name="ageChecked" />
      <span>You put: {props.conclusionsData['age']}</span>
    </div>
    <Field name="age" component="select" className="form-control" disabled={props.ageChecked}>
      <option></option>
      <option value="1-3">1-3</option>
      <option value="3-5">3-5</option>
      <option value="5-10">5-10</option>
      <option value="10+">10+</option>
    </Field>
    <hr />
    <h4>Final Conclusion</h4>
    <ControlLabel>Vintage</ControlLabel>
    <div>
      <CheckboxField name="vintageChecked" />
      <span>You put: {props.conclusionsData['vintage']}</span>
    </div>
    <Field name="vintage" component="input" type="text" className="form-control" disabled={props.vintageChecked} />
    <ControlLabel>Varietals</ControlLabel>
    <div>
      <CheckboxField name="varietalsChecked" />
      <span>You put: {props.conclusionsData['varietals']}</span>
    </div>
    <Field name="varietals" component="input" type="text" className="form-control" disabled={props.varietalsChecked} />
    <ControlLabel>Country</ControlLabel>
    <div>
      <CheckboxField name="countryChecked" />
      <span>You put: {props.conclusionsData['country']}</span>
    </div>
    <Field name="country" component="input" type="text" className="form-control" disabled={props.countryChecked} />
    <ControlLabel>Region</ControlLabel>
    <div>
      <CheckboxField name="regionChecked" />
      <span>You put: {props.conclusionsData['region']}</span>
    </div>
    <Field name="region" component="input" type="text" className="form-control" disabled={props.regionChecked} />
    <ControlLabel>Sub-Region</ControlLabel>
    <div>
      <CheckboxField name="subregionChecked" />
      <span>You put: {props.conclusionsData['subregion']}</span>
    </div>
    <Field name="subregion" component="input" type="text" className="form-control" disabled={props.subregionChecked} />
    <ControlLabel>Quality Level (Not scored)</ControlLabel>
    <div>You put: {props.conclusionsData['quality']}</div>
    <ControlLabel>Other Observations (Not scored)</ControlLabel>
    <div>You put: {props.conclusionsData['otherObservations']}</div>
    <hr />
  </form>);
};

const ConnectedResultsForm = reduxForm({
  destroyOnUnmount: false,
})(ResultsForm);

const ConnectedResultsFormWithSelector = connect(
  (state, ownProps) => {
    const selector = formValueSelector(ownProps.form);
    return {
      styleChecked: selector(state, 'styleChecked'),
      ageChecked: selector(state, 'ageChecked'),
      vintageChecked: selector(state, 'vintageChecked'),
      varietalsChecked: selector(state, 'varietalsChecked'),
      countryChecked: selector(state, 'countryChecked'),
      regionChecked: selector(state, 'regionChecked'),
      subregionChecked: selector(state, 'subregionChecked'),
    }
  }, () => {
    return {
      change
    };
  }
)(ConnectedResultsForm);
  
export default ConnectedResultsFormWithSelector;