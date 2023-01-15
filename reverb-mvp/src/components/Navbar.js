import React from "react";
import { Nav, NavLink, NavMenu, } from "./NavbarElements";
import * as BiIcons from "react-icons/bi"
import * as TbIcons from "react-icons/tb"
import "../Fonts.css";

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavMenu>

          <h1 className="navtitle2">Reverb</h1>

          <NavLink className="row" to="/" activeStyle>
            <NavLink className="navtitle1" to="/">
              Home
            </NavLink>
            <NavLink id="title" to="/">
              
            </NavLink>
          </NavLink>

          <div className="subtitle"> Other</div>

          <NavLink className="row" id="bottom" to="/buttons" activeStyle>
            <NavLink id="icon" to="/buttons">
              <BiIcons.BiBug/>
            </NavLink>
            <NavLink id="title" to="/buttons">
              W3A Buttons
            </NavLink>
          </NavLink> 

          <NavLink className="row" to="/rights" activeStyle>
            <NavLink id="icon" to="/rights">
              <BiIcons.BiFile/>
            </NavLink>
            <NavLink id="title" to="/rights">
              Reverb Rights
            </NavLink>
          </NavLink>

        </NavMenu>
        <button className="bottom-button" onClick={() => props.logout()}>
          LogOut
        </button>
      </Nav>
    </>
  );
};

export default Navbar;
