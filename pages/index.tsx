import React from 'react';
import { connect } from 'react-redux';

import { startClock, serverRenderClock } from '../store/store';
import Examples from '../components/examples';

interface Props {
  startClock: () => void;
}

class Index extends React.Component<Props> {
  timer: NodeJS.Timeout;

  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    if (isServer) {
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
      reduxStore.dispatch(serverRenderClock());
    }

    return {};
  }

  componentDidMount() {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    this.timer = setInterval(() => this.props.startClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Examples />;
  }
}

const mapDispatchToProps = { startClock };
export default connect(
  null,
  mapDispatchToProps
)(Index);
