import { ChangeEventHandler, FC, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Divider,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import { search } from "@/services/Api";
import Poster from "@/components/Poster/Poster";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchOptions, setSearchOptions] = useState<any>([]);

  const fetchData = async () => {
    const data = await search(searchValue);

    setSearchOptions(data?.results || []);
  };

  const debounced = useDebouncedCallback(fetchData, 2000);
  const router = useRouter();

  useEffect(() => {
    debounced();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Box sx={{ width: "100%", ml: { xs: 0, md: 1 } }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={searchOptions}
        onClose={() => setSearchOptions([])}
        getOptionLabel={(option) => option.name ?? option.title}
        sx={{ width: 500 }}
        renderOption={(props, option) => {
          return (
            <MenuItem
              sx={{ flexDirection: "column", alignItems: "start" }}
              key={option.id}
              onClick={() =>
                router.push(`/${[option.media_type]}/${option.id}`)
              }
            >
              <Typography>{option.name || option.title}</Typography>
              <Stack flexDirection="row">
                {option.poster_path && (
                  <Poster
                    img={option.poster_path}
                    style={{ height: 50, width: 50, marginRight: 10 }}
                  />
                )}

                <Box>
                  <Stack flexDirection="row">
                    <Typography>Category: </Typography>
                    <Typography>{option.media_type}</Typography>
                  </Stack>
                  {(option.first_air_date || option.release_date) && (
                    <Stack flexDirection="row">
                      <Typography>Air date: </Typography>
                      <Typography>
                        {option.first_air_date || option.release_date}
                      </Typography>
                    </Stack>
                  )}
                </Box>
              </Stack>
            </MenuItem>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            value={searchValue}
            onChange={(e: ChangeEventHandler<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            color="secondary"
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

export default Search;
