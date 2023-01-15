//import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 100vh;
  width: 200px;
  background: rgb(38,36,50);
  background: linear-gradient(90deg, rgba(38,36,50,1) 0%, rgba(15,14,18,1) 100%);
  color: white;
  padding: 0;
  position: fixed;
  z-index: 1000;

  .bottom-button{
    margin: 10px;
    margin-bottom: 9vh;
    padding: 10px;
    display: flex;
    flex-direction: collumn;
    position: absolute;
    bottom: 0;
    width: 180px;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    color: black;
    background-color: #fafafa;
    text-decoration: none;
    border: 1px solid #0070f3;
    border-radius: 10px;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0%;
  cursor: pointer;
  &.active {
    color: white;
    font-weight: bold;
  }
`;

export const NavMenu = styled.div`
  .navtitle1{
    padding-left: 10px;
    color: #ffffff;
  }
  .navtitle2{
    color: #ffffff;
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 40px;
    justify-content: center;
    display: flex;
  }
  .subtitle{
    padding-left: 10px;
    color: #6f688e;
  }
  .row{
    width: 100%;
    height: 50px;
    list-style-type: none;
    margin: 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .row #icon{
    flex: 20%;
    display: grid;
    place-items: center;
  }
  .row #title{
    flex: 80%;
    display: grid;
    place-items: left;
  }
  .create{
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 10px;
    margin-left: 0px;
    cursor: pointer;
  }
  .create #icon{
    flex: 20%;
    display: grid;
    place-items: center;
  }
  .create #title{
    flex: 80%;
    display: grid;
    place-items: left;
  }
`;
