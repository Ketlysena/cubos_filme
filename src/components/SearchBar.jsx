import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const urlFilmes = "https://api.themoviedb.org/3/search/movie";
  const bearerToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVhZjJkMTllYjZkNzAxMTgzYzQ5YTgxZmYzNDViOSIsIm5iZiI6MTczODQ1MjQ4Ni43NDgsInN1YiI6IjY3OWVhZTA2YjA2NDM3YTRlZTI2Mzg3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r9x7Tv9mdTrCZP0bht4MXmAeJgk-wC7zK_G23T81kbI";

  const handleSearch = (page = 1) => {
    fetch(`${urlFilmes}?query=${searchTerm}&language=pt-BR&page=${page}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
        setTotalPages(Math.ceil(data.total_results / 10));
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    handleSearch(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <TextField
        label="Pesquisar filmes"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          backgroundColor: "#333", 
          borderRadius: "5px", 
          width: "100%",
          maxWidth: "400px",
          height: "55px",
          "& .MuiOutlinedInput-root": {
            color: "white",
            height: "55px", 
            "& fieldset": {
              borderColor: "#555", 
            },
            "&:hover fieldset": {
              borderColor: "#888", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff", 
            },
          },
          "& .MuiInputLabel-root": {
            color: "#ccc", 
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", 
          },
        }}
      />
      <Button variant="contained" color="primary" onClick={() => handleSearch()}>
        Buscar
      </Button>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          maxHeight: "500px", 
          overflowY: "auto", 
          padding: 2,
        }}
      >
        {movies.map((movie) => (
          <Card key={movie.id} sx={{ width: "calc(20% - 16px)", margin: "8px" }}>
            <CardMedia
              component="img"
              height="250"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ mt: 4 }}
        />
      )}
    </Box>
  );
};

export default SearchBar;
