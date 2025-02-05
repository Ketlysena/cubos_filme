import { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Pagination } from "@mui/material";

const urlFilmes = "https://api.themoviedb.org/3/movie/";
const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVhZjJkMTllYjZkNzAxMTgzYzQ5YTgxZmYzNDViOSIsIm5iZiI6MTczODQ1MjQ4Ni43NDgsInN1YiI6IjY3OWVhZTA2YjA2NDM3YTRlZTI2Mzg3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r9x7Tv9mdTrCZP0bht4MXmAeJgk-wC7zK_G23T81kbI";

const MovieList = () => {
  const [filmesTop, setFilmesTop] = useState([]);
  const [conexaoBemSucedida, setConexaoBemSucedida] = useState(false);
  const [erro, setErro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const obterFilmesMelhorAvaliados = async (page = 1) => {
    try {
      const resposta = await fetch(`${urlFilmes}top_rated?language=pt-BR&page=${page}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${bearerToken}`
        }
      });
      if (!resposta.ok) {
        throw new Error(`HTTP error! status: ${resposta.status}`);
      }
      const dados = await resposta.json();
      setFilmesTop(dados.results.slice(0, 10)); 
      setTotalPages(Math.ceil(dados.total_results / 10)); 
      setConexaoBemSucedida(true);
    } catch (erro) {
      console.error("Erro ao buscar os filmes:", erro);
      setErro(erro.message);
      setConexaoBemSucedida(false);
    }
  };

  useEffect(() => {
    obterFilmesMelhorAvaliados(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    obterFilmesMelhorAvaliados(value);
  };

  return (
    <Box sx={{ padding: 1 }}>
      {conexaoBemSucedida ? (
        <div>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent:"center" }}>
            {filmesTop.map((filme) => (
              <Card key={filme.id} sx={{ width: "calc(20% - 16px)", margin: "8px" }}>
              <CardMedia
                component="img"
                height="250"
                image={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {filme.title}
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
              sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
            />
          )}
        </div>
      ) : (
        <Typography variant="h6" color="error">
          Falha na conexão. {erro}
        </Typography>
      )}
    </Box>
  );
};

export default MovieList;
