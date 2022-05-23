import { useContext } from "react";
import { CountryContext } from "./context/CountryContext";
import { Link } from "react-router-dom";
import axios from "axios";

function Country(props) {
  const { setCountries } = useContext(CountryContext);
  const { id, tittle, description, img } = props;

  console.log(id);
  const deleteHandler = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/travel/${id}`);
    setCountries((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "25vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        id={id}
      >
        <div className="card-image">
          <img className="activator" src={img} alt={tittle} />
          <span className="card-title">{tittle}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action flex-row__JC-SA">
          <Link to={`/countrydetails/${id}`}>Подробнее</Link>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={deleteHandler}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Country;
