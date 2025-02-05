import Slider from "react-slick";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const CarrosselFilmes = ({ filmes }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,  
    slidesToScroll: 10,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {filmes.map((filme) => (
        <Card key={filme.id} sx={{ width: 200, margin: '0 10px' }}> 
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
            alt={filme.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {filme.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {filme.overview}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

CarrosselFilmes.propTypes = {
  filmes: PropTypes.array.isRequired,
};

export default CarrosselFilmes;
