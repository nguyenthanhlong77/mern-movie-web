import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Header";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route paht="/">
          <Route path="" element={<Home />} />
        </Route>
        {/* No other routes match */}
        {/* <Route path="aaaa" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
