import React from "react";
import BookList from "./components/BookList";
import ApolloCleint from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloCleint({
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div id="main">
      <h1>Welcome to Book List</h1>
      <BookList />
    </div>
    </ApolloProvider>
  );
}

export default App;
