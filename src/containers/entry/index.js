import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GeneralForm from '../../forms/general'

const Entry = props => (
  <div>
    <h1>Enter Press Release Content</h1>
    <GeneralForm />
    <p><button onClick={() => props.changePage()}>View Press Release</button></p>
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
