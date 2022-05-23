import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CountryContext } from "./context/CountryContext";

const CountryDetail = () => {
  const { countries = [] } = useContext(CountryContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const curCountry = countries.find((e) => +e.id === +id);
  return (
    <>
      <div className="content" style={{margin: '0 0 0 260px'}}>
        <div>
          <h4>{curCountry.tittle}</h4>
        </div>
        <img
          className="activator"
          src={curCountry.img}
          alt={curCountry.tittle}
        />
        <div>{curCountry.description}</div>
        <button className="btn detail-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
};

export default CountryDetail;
