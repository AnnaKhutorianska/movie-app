import { FC } from "react"
import Link from "next/link"
import { Grid, Link as MuiLink } from "@mui/material"
import MovieCard from "../MovieCard"
import { pathes } from "@/path"

interface MovieListProps {
  movies: any
  path: any
}

const MovieList:FC<MovieListProps> = ({movies, path}) => {
  return (
    <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
        my={2}
      >
        {movies.map((movie) => (
          <Grid item key={movie.id}>
            <MuiLink
              href={`${path}/${movie.id}`}
              component={Link}
              sx={{
                height: "100%",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <MovieCard movie={movie} />
            </MuiLink>
          </Grid>
        ))}
      </Grid>
  )
}

export default MovieList