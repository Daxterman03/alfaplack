import './App.css';
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import {Home} from "./components/pages/home/Home";
import {Nosotros} from "./components/pages/nosotros/Nosotros";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Nosotros />
      <Footer />
    </div>
  );
}

export default App;
