import { FC, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  FormControl,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { search } from "@/services/Api";
import Poster from "@/components/Poster/Poster";
import { log } from "console";

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<any>([]);

  const fetchData = async () => {
    const data = await search(searchValue);

    setSearchOptions(data?.results || []);
  };

  const debounced = useDebouncedCallback(fetchData, 2000);

  useEffect(() => {
    debounced();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Box sx={{ width: "100%", ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: "100%", md: 224 } }}>
        {/* <OutlinedInput
          value={searchValue}
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        /> */}
      </FormControl>

      <Autocomplete
        options={searchOptions}
        // onClose={() => setSearchOptions([])}
        getOptionLabel={option => option.name ?? option.title}
        renderOption={(props, option) => {
          return (
            <MenuItem key={option.id}>
              <Stack>
                <Typography>{option.name || option.title}</Typography>
                <Box>
                  <Poster
                    img={option.poster_path}
                    style={{ height: 50, width: 50 }}
                  />
                  <Typography>{option.first_air_date}</Typography>
                </Box>
              </Stack>
            </MenuItem>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
      />
    </Box>
  );
};

export default Search;
