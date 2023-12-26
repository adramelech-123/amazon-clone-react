import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components'
import {HomePage, ProductPage, SearchResults, Checkout} from "./views";
function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchResults/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App
