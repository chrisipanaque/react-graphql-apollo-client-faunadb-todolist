import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_DB_URI}`,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_DB_BEARER_TOKEN}`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
