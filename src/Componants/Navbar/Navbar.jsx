import { faDrumstickBite, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { isAuthticated, login } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  
  const handelLogin = () => {
    if (!login(password)) {
      alert("كلمه المرور غير صحيحه");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* الجزء الخاص باللوجو */}
        <h2 className="line d-flex align-items-center">
        <img className="logo m-1" src={`${process.env.PUBLIC_URL}/Assets/logo2.png`} alt="Logo" />

          C.Hagar Alaa
        </h2>

        {/* زر التوجلار */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* القائمة المنسدلة */}
        <div className="collapse navbar-collapse d-md-flex justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-item nav-link text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link text-decoration-none" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link text-decoration-none" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* الجزء الخاص بالباسورد */}
        <div className="d-flex align-items-center">
          {!isAuthticated ? (
            <div className="meal-card d-flex rounded-2">
            
              <input
                type="password"
                className="form-control "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter-password"
              />
              <button className="btn btn-dark mt-1 " onClick={handelLogin}>
                login
              </button>
            </div>
          ) : (
            <>
            <Link className="text-decoration-none" to="mealplan">
              <FontAwesomeIcon className="meal" icon={faDrumstickBite} />
            </Link >
            <Link  className="text-decoration-none" to="adminpage">
            <FontAwesomeIcon className="user" icon={faUser} />
            </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

