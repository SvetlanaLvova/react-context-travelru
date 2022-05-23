import { Link } from "react-router-dom"
import AddCountry from './AddCountry';
import FindCountry from './FindCountry';

function Header() {
  
  return (
    <>
      <nav className="teal darken-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Travel.ru</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">          
          <li><Link to="/findcountry">Find country</Link></li>
          <li><Link to="/addcountry">Add country</Link></li>          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;


