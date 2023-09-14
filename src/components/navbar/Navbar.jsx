import React from "react";
import "./navbar.css";
import ButtonLogin from "../ButtonLogin/ButtonLogin.jsx";
import { Link as Anchor, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token, photo } = useSelector((store) => store.users);
  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="d-flex flex-row navbarLogo">
          <span className="navbar-brand mb-0 h1  ">MyTinerary</span>
        </div>
        <div className="navButtons">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
          >
            HOME
          </NavLink>
        </div>
        <div className="navButtons">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
            to="/cities"
          >
            CITIES
          </NavLink>
        </div>
        <div className="d-flex">
          {token == "" ? (
            <ButtonLogin href={"/login"} title={"Login"} />
          ) : (
            <>
              <ButtonLogin href={"/"} title={"Logout"} login={true} />

              <figure className="d-flex m-0" id="userPhoto">
                <img
                  src={photo}
                  alt="userPhoto"
                  className="fotito bg-white img-thumbnail m-0"
                />
              </figure>
            </>
          )}
          {/* <button type="button" className="btn btn-primary navButtons">LogIn</button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
