import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AutocompleteComponent from "../../components/AutoComplete";
import { httpGet, httpPost } from "../../components/Rest";
import { Button } from "@mui/material";
import "../../styles/findingfalcone.scss";
import AppContext from "../../components/Context/AppContext";

const FindingFalconeComponent = () => {
  const navigate = useNavigate();
  const { setPlanetNames, setVehicleNames, setVehicleValues } =
    useContext(AppContext);
  const [planet1, setPlanet1] = useState(null);
  const [planet2, setPlanet2] = useState(null);
  const [planet3, setPlanet3] = useState(null);
  const [planet4, setPlanet4] = useState(null);
  const [vehicle1, setVehicle1] = useState("");
  const [vehicle2, setVehicle2] = useState("");
  const [vehicle3, setVehicle3] = useState("");
  const [vehicle4, setVehicle4] = useState("");

  const [token, setToken] = useState("");

  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const getToken = () => {
    httpPost("https://findfalcone.herokuapp.com/token")
      .then((data) => {
        if (data && data.status && data.status === 200) {
          setToken(data?.data?.token);
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    httpGet("https://findfalcone.herokuapp.com/planets")
      .then((data) => {
        if (data && data.status && data.status === 200) {
          setPlanets(data.data);
        } else {
          console.log(data, "data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    httpGet("https://findfalcone.herokuapp.com/vehicles")
      .then((data) => {
        if (data && data.status && data.status === 200) {
          setVehicles(data.data);
          setVehicleValues(data.data);
        } else {
          console.log(data, "data");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    getToken();
  }, []);

  const findFalcone = () => {
    const plantesData = [
      planet1.name,
      planet2.name,
      planet3.name,
      planet4.name,
    ];
    const vehiclesData = [vehicle1, vehicle2, vehicle3, vehicle4];
    setPlanetNames(plantesData);
    setVehicleNames(vehiclesData);
    const request = {
      token,
      planet_names: plantesData,
      vehicle_names: vehiclesData,
    };
    httpPost("https://findfalcone.herokuapp.com/find", request)
      .then((data) => {
        if (data && data.status && data.status === 200) {
          navigate("/success-page", { state: { data: data?.data } });
        } else {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="autocomplete-componenent-container">
          <AutocompleteComponent
            planet={planet1}
            setPlanet={setPlanet1}
            vehicle={vehicle1}
            setVehicle={setVehicle1}
            planets={planets}
            vehicles={vehicles}
            title="Destination 1"
          />
          <AutocompleteComponent
            planet={planet2}
            setPlanet={setPlanet2}
            vehicle={vehicle2}
            setVehicle={setVehicle2}
            planets={planets}
            vehicles={vehicles}
            title="Destination 2"
          />
          <AutocompleteComponent
            planet={planet3}
            setPlanet={setPlanet3}
            vehicle={vehicle3}
            setVehicle={setVehicle3}
            planets={planets}
            vehicles={vehicles}
            title="Destination 3"
          />
          <AutocompleteComponent
            planet={planet4}
            setPlanet={setPlanet4}
            vehicle={vehicle4}
            setVehicle={setVehicle4}
            planets={planets}
            vehicles={vehicles}
            title="Destination 4"
          />
        </div>
      </div>
      <div className="container button-div">
        <Button variant="outlined" onClick={() => findFalcone()}>
          Find
        </Button>
      </div>
    </>
  );
};

export default FindingFalconeComponent;
