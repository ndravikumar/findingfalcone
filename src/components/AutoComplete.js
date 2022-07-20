import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function AutocompleteComponent({
  title,
  planet,
  setPlanet,
  vehicle,
  setVehicle,
  planets,
  vehicles,
}) {
  const handleChange = (event) => {
    setVehicle(event.target.value);
  };

  return (
    <div className="autocomplete-container">
      <h3> {title} </h3>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        value={planet}
        onChange={(event, newValue) => {
          setPlanet(newValue);
        }}
        options={planets}
        getOptionDisabled={(option) => option.disabled}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {planet && (
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={vehicle}
              onChange={handleChange}
            >
              {vehicles &&
                vehicles.length > 0 &&
                vehicles.map((vehicle) => {
                  return (
                    <FormControlLabel
                      value={vehicle.name}
                      control={<Radio />}
                      label={`${vehicle.name} (${vehicle.total_no})`}
                    />
                  );
                })}
            </RadioGroup>
          </FormControl>
        </div>
      )}
    </div>
  );
}

AutocompleteComponent.defaultProps = {
  options: [],
  title: "Destination",
};
