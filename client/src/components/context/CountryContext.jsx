import { createContext, useState, useEffect } from "react";
import env from "react-dotenv";
import axios from "axios";

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_PATH}/travel`)
    .then(res => {
     //console.log([res]); //{data: { countries: [{}, {}, {}] }}
      return setCountries(res.data.countries)
    })
    .then(() => setLoading(false));
  }, []);

  return (
    <CountryContext.Provider value={{loading, countries, setLoading, setCountries}}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;
