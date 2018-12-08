import React, { Component } from 'react';
import './index.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';

const client = new ApolloClient({
  uri: 'https://eu1.prisma.sh/flexbox/minimalist/dev'
});

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}

export default Root;
