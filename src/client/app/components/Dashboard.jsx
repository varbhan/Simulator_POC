import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as simulatorActions from '../actions/simulatorActions';
import PropTypes from 'prop-types';
import React from 'react';

class Dashboard extends React.Component {
  renderData() {
    return <div>{this.props.simulatorData}</div>;
  }

  render() {
    return (
      <div className="">
          {this.props.simulatorData.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

Dashboard.propTypes = {
  simulatorActions: PropTypes.object,
  simulatorData: PropTypes.array
};

function mapStateToProps(state) {
  return {
    simulatorData: state.simulatorData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    simulatorActions: bindActionCreators(simulatorActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
