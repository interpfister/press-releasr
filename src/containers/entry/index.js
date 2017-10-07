import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GeneralForm from '../../forms/general'
import ConclusionForm from '../../forms/conclusion'

const Entry = props => (
  <div>
    <h1>Blind Wine Tasting</h1>
    <GeneralForm />
    <h3>Wine 1</h3>
    <ConclusionForm form="conclusions[0]" />
    <h3>Wine 2</h3>
    <ConclusionForm form="conclusions[1]" />
    <h3>Wine 3</h3>
    <ConclusionForm form="conclusions[2]" />

    <p><button onClick={() => props.changePage()}>Enter Results</button></p>
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/results')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry)
