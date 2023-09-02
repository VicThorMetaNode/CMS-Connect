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
          <section className="w-full h-[100%] bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
            <div className="max-w-980 md:h-[calc(100vh - 40px)] mx-auto h-screen w-full px-2 md:w-[80%] md:px-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
              </Routes>
              <ToastContainer />
            </div>
          </section>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
