import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ResultsDisplay from './results-display'
import ConclusionForm from '../../forms/conclusion'

const Results = (props) => (
  <div>
    <h1>Results</h1>
    <h3>Wine 1</h3>
    <ResultsDisplay data={props.conclusions[0]} />
    <ConclusionForm model="results[0]" />
    Points: {points(props.conclusions[0], props.results[0])}
    <h3>Wine 2</h3>
    <ResultsDisplay data={props.conclusions[1]} />
    <ConclusionForm model="results[1]" />
    Points: {points(props.conclusions[1], props.results[1])}
    <h3>Wine 3</h3>
    <ResultsDisplay data={props.conclusions[2]} />
    <ConclusionForm model="results[2]" />
    Points: {points(props.conclusions[2], props.results[2])}
    <hr />
    Total Points: {sumOfPoints(props)}
  </div>
)

const points = (object1, object2) => {
  const keys = Object.keys(object1);
  return keys.reduce((sum, key) => {
    return object1[key] && object2[key] && object1[key].trim() === object2[key].trim() ? sum + 1 : sum;
  }, 0)
}

const sumOfPoints = (props) => {
  let sum = 0;
  for(let i=0; i<3;i++) {
    sum = sum + points(props.conclusions[i], props.results[i]);
  }

  return sum;
}

const mapStateToProps = state => ({
  conclusions: state.forms.conclusions,
  results: state.forms.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

