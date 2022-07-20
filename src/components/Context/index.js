import React, { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [planetNames, setPlanetNames] = useState([]);
  const [vehicleNames, setVehicleNames] = useState([]);

  const [vehicleValues, setVehicleValues] = useState([]);
  return (
    <AppContext.Provider value={{ planetNames, setPlanetNames, vehicleNames, setVehicleNames,vehicleValues, setVehicleValues }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
