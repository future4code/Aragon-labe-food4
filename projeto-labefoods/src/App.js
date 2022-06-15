import Footer from "./components/Footer";
import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";

function App() {
  return (
    <GlobalState>
      <Router />
      <Footer/>
    </GlobalState>
  );
}

export default App;
