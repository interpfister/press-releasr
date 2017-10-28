import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import generateRelease from '../../helpers/generate-release';

const Results = (props) => (
  <div>
    <h1>Ultra-cool event coming up!!!</h1>
    <div>
      {props.content}
    </div>
  </div>
)

const mapStateToProps = state => ({
  content: generateRelease(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

