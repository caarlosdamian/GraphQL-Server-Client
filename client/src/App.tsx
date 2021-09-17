import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Container } from "@material-ui/core";
import SelectMetric from "./components/SelectMetric/SelectMetric";
import { useState } from "react";

function App() {
  const [globalMetric, setGlobalMetric] = useState("");

  const client = new ApolloClient({
    uri: "https://react.eogresources.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "aliceblue",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          marginTop: "25px",
        }}
      >
        <SelectMetric setGlobalMetric={setGlobalMetric} globalMetric={globalMetric} />
      </Container>
    </ApolloProvider>
  );
}

export default App;
