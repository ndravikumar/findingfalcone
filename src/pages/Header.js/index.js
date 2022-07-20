import { Link, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/findingfalcone.scss";

const Header = () => {
    const navigate = useNavigate()
    const navigateToHome = ()=> {
        navigate("/")
        window.location.reload();
    }
  return (
    <div className="container">
      <h1 className="finding-falcone-text">Finding Falcone !</h1>
      <div className="side-button-container">
        <Button onClick={()=> navigateToHome()} className="reset-button"> Reset </Button>|{" "}
        <span className="home-link">
          <Link onClick={()=> navigateToHome()}>Home</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
