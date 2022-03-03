import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup() {
  const [selected, setSelected] = useState(false);
  const changeScore = (e) => {
    console.log(e);
    console.log("value=> ", e.target.checked);
    console.log("label=> ", e.target.label);
    setSelected(!e.target.checked);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          control={<Radio />}
          label="Choice 1"
          onClick={changeScore}
        />
        <FormControlLabel
          control={<Radio />}
          label="Choice 2"
          onClick={changeScore}
        />
        <FormControlLabel
          control={<Radio />}
          label="Choice 3"
          onClick={changeScore}
        />
      </RadioGroup>
    </FormControl>
  );
}
