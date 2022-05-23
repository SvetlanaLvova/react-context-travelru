import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import FindeCountry from './components/FindCountry';
import AddCountry from './components/AddCountry';
import CountryDetail from './components/CountryDetail'


function App() {
 
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/findcountry" element={ <FindeCountry /> } />
        <Route path="/addcountry" element={ <AddCountry /> } />
        <Route path="/countrydetails/:id" element={ <CountryDetail /> } /> 
    </Routes>
     
    <Footer />
    </>
  );
}

export default App;
