import "./App.css";
import Home from "./Pages/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql-weather-api.herokuapp.com/",
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
