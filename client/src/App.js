import "./App.css";
import Routes from "./routes";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h2>Lista de estudantes</h2>
        </header>
        <div className="App-body">
          <Routes />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
