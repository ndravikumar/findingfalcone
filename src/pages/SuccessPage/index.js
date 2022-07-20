import React, { useContext } from "react";
import Header from "../Header.js";
import { useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../components/Context/AppContext.js";
import { Button } from "@mui/material";

function SuccessPage() {
  const { planetNames, vehicleNames, vehicleValues } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const data = location && location.state && location?.state?.data;
  const index =
    planetNames &&
    planetNames.length > 0 &&
    planetNames.indexOf(data.planet_name);
  const timeTaken = vehicleValues.filter(
    (item) => vehicleNames[index] === item.name
  );

  return (
    <div>
      <Header />

      <div className="success-container">
        <div>
          <h2>
            Success! Congratulations on Finding Falcone. King Shan is mighty
            pleased.
          </h2>
        </div>
        <div>
          <h3>
            Time taken:{" "}
            {timeTaken && timeTaken.length > 0 && timeTaken[0].max_distance}
          </h3>
        </div>
        <div>
          <h3>Planet found: {data?.planet_name}</h3>
        </div>
      </div>
      <div className="container button-div">
        <Button variant="outlined" onClick={() => navigateToHome()}>
          Start Again
        </Button>
      </div>
    </div>
  );
}

export default SuccessPage;
