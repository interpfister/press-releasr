import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResultsForm from '../../forms/results';
import { ControlLabel } from 'react-bootstrap';

const Results = (props) => (
  <div>
    <h1>Results</h1>
    <h3>Wine 1</h3>
    <ResultsForm form="results[0]" conclusionsData={props.conclusions[0].values || {}} />
    Points: {points(props.conclusions[0].values, props.results[0].values)}
    <h3>Wine 2</h3>
    <ResultsForm form="results[1]" conclusionsData={props.conclusions[1].values || {}} />
    Points: {points(props.conclusions[1].values, props.results[1].values)}
    <h3>Wine 3</h3>
    <ResultsForm form="results[2]" conclusionsData={props.conclusions[2].values || {}} />
    Points: {points(props.conclusions[2].values, props.results[2].values)}
    <hr />
    <ControlLabel>General Tasting Notes</ControlLabel>
    <div>{props.general && props.general.values && props.general.values.tastingNotes}</div>
    Total Points: {sumOfPoints(props)}
  </div>
)

const points = (object1, object2) => {
  if (!object1 || !object2) {
    return 0;
  }
  const keys = Object.keys(object1);
  return keys.reduce((sum, key) => {
    return object1[key] && object2[key] && object1[key].trim() === object2[key].trim() ? sum + 1 : sum;
  }, 0)
}

const sumOfPoints = (props) => {
  let sum = 0;
  for(let i=0; i<3;i++) {
    sum = sum + points(props.conclusions[i].values, props.results[i].values);
  }

  return sum;
}

const mapStateToProps = state => ({
  conclusions: state.form.conclusions || [{},{},{}],
  results: state.form.results || [{},{},{}],
  general: state.form.general || {},
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

