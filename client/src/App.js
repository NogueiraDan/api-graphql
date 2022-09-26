import "./App.css";
import Routes from "./routes";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Conectando o client do GraphQL com o nosso servidor
const client = new ApolloClient({
  // uri do servidor
  uri: "http://localhost:4000",
  // Armazenar os valores localmente em Cache
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
