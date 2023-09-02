import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Coach } from "./components/Coach.tsx";
import AddCoachModal from "./components/AddCoachModal.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <section className="w-full h-[100%] bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
          <div className="max-w-980 md:h-[calc(100vh - 40px)] mx-auto h-screen w-full px-2 md:w-[80%] md:px-0">
            <AddCoachModal />
            <Coach />
            <ToastContainer />
          </div>
        </section>
      </ApolloProvider>
    </>
  );
}

export default App;
