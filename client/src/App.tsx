import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Project } from "./pages/Project";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        coaches: {
          merge(_, incoming) {
            //originally using existing, incoming but Typescript error because not used. So use of '_'
            return incoming;
          },
        },
        projects: {
          merge(_, incoming) {
            //originally using existing, incoming but Typescript error because not used. So use of '_'
            return incoming;
          },
        },
      },
    },
  },
});

//create coach
const coach = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={coach}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
          <ToastContainer />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
