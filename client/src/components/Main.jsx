import {useContext} from 'react';
import CountriesList from "./CountriesList";
import Preloader from "./Preloader";
import {CountryContext} from './context/CountryContext';



function Main() {
 const {loading} = useContext(CountryContext);

  return (
    <>
   <main className="container content">
   {loading ? <Preloader /> : (<CountriesList />) }
   </main>
    </>
  );
}

export default Main;
