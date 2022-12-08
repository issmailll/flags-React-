import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import CountriesPage from "./pages/Countries/CountriesPage";
import Country from "./pages/Country";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/countries/:abc" element={<Country />} />

            <Route path="/location" element={<LocationPage />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
};
export default App;
