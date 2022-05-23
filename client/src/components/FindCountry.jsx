import { useContext, useState } from 'react';
import axios from 'axios';
import { CountryContext } from './context/CountryContext';
import  Country  from '../components/Country';
import Preloader from './Preloader';


function FindCountry() {
 const [findCountry, setFindCountry] = useState('');
 const [countryInfo, setCountryInfo] = useState({});
 const { setLoading, loading } = useContext(CountryContext);

 const searchCountry = (str) => {
  setLoading(true);
  axios.get(`${process.env.REACT_APP_PATH}/travel/${findCountry}`)
  .then(res => setCountryInfo(res.data.countries[0])) // [{}]
  .then(setLoading(false));
}

  return (
    <div className="content" style={{margin: '0 0 0 550px'}}>
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder="country name"
            type="text"
            className="validate"
            value={findCountry}
            onChange={(e) => setFindCountry(e.target.value)}
          />
        <button className="btn search-btn" onClick={(e) => searchCountry(findCountry)}>Search</button>
        </div>
      </div >
      <div style={{margin: '0 0 0 90px'}}>
      {countryInfo?.tittle ? <Country {...countryInfo}/> : <div>{findCountry && 'Not found'}</div>} 
      </div>
    </div>
  );
}

export default FindCountry;

