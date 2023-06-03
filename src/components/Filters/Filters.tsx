import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

interface FiltersProps {
  filters: string[]
}

const Filters: FC<FiltersProps> = ({ filters }) => {
  const [value, setValue] = useState(filters[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };


  return (
    <FormControl>
      <FormLabel>TRENDING</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {filters.map((filter) => (
          <FormControlLabel
            key={filter}
            value={filter}
            control={<Radio />}
            label={filter}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Filters;
