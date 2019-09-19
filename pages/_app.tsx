import App, { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux';

import withReduxStore from '../store/withRedux';

export interface AppWithReduxProps extends AppProps {
  reduxStore: Store,
}

export class MyApp extends App<AppWithReduxProps> {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp);
