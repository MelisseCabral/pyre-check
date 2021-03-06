import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trace from './Trace'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/trace/:issue_id" component={Trace} />
      </div>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
