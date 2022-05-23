import { useContext } from "react";
import Country from "./Country";
import { CountryContext } from "./context/CountryContext";

function CountriesList() {
  const { countries = [] } = useContext(CountryContext);

  return (
    <>
      <div
        className="countries"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {countries.length ? (
          countries.map((country) => <Country key={country.id} {...country} />)
        ) : (
          <h4>Nothing was found</h4>
        )}
      </div>
    </>
  );
}

export default CountriesList;
