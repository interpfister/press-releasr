import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GeneralForm from '../../forms/general'
import EventTypeForm from '../../forms/eventType'
import fetchContent from '../../helpers/fetch-content';
import getEventTypes from '../../helpers/event-type-selector';

class Entry extends React.Component {
  componentDidMount() {
    this.props.fetchContent();
  }

  render() {
    return (
      <div>
        <h1>Enter Press Advisory Content</h1>
        <EventTypeForm eventTypes={this.props.eventTypes} />
        
        <GeneralForm />
        <p><button onClick={() => this.props.changePage()}>View Press Advisory</button></p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eventTypes: getEventTypes(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/results'),
  fetchContent
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry)
