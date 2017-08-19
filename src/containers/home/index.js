import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GeneralForm from '../../forms/general'
import ConclusionForm from '../../forms/conclusion'

const Home = props => (
  <div>
    <h1>Blind Wine Tasting</h1>
    <GeneralForm />
    <h3>Wine 1</h3>
    <ConclusionForm model="conclusions[0]" />
    <h3>Wine 2</h3>
    <ConclusionForm model="conclusions[1]" />
    <h3>Wine 3</h3>
    <ConclusionForm model="conclusions[2]" />

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
