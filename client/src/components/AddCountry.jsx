import { useState } from "react";
import axios from "axios";

function AddCountry() {
  const [tittle, setTittle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const addHeader = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/newTravel", {
      tittle: tittle,
      img: img,
      description: description,
    })
    .then(data => data)

    setTittle('');
    setImg('');
    setDescription('');
  };

  return (
    <div className="content">
      <form className="col s12 m-2" style={{ margin: "0 500px" }}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              placeholder="country name"
              onChange={(e) => setTittle(e.target.value)}
              value={tittle}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              placeholder="img"
              onChange={(e) => setImg(e.target.value)}
              value={img}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <button className="btn add-btn" onClick={addHeader}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddCountry;
