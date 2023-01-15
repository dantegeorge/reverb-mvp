import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const MusicNav = styled.div`
  height: 9vh;
  width: 100%;
  background: rgb(38,36,50);
  background: linear-gradient(360deg, rgba(38,36,50,1) 0%, rgba(15,14,18,1) 100%);
  color: white;
  padding: 0;
  position: fixed;
  z-index: 2000;
  bottom: 0;
`;

export const TimeControlContainer = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ControlsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
`;

export const Track = styled.div`
  background: white;
  width: 40%;
  height: 0.2rem;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
    
`;

export const P = styled.p`
  color: white;
  padding: 0;
  margin 0;
  margin-left: 8px;
  margin-right 8px;
  margin-bottom 2px;
  font-size: 12px;
`;