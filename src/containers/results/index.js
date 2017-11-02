import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import generateRelease from '../../helpers/generate-release';
import fetchContent from '../../helpers/fetch-content';
import ReactMarkdown from 'react-markdown';

class Results extends React.Component {
  componentDidMount() {
    this.props.fetchContent();
  }
  render() {
    return (
      <div>
        <ReactMarkdown source={this.props.content} />
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  content: generateRelease(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchContent,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

