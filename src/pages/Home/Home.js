import * as S from "../../styles/HomeStyled";
import cancel from "../../assets/cancel_genre.png";
import arrow from "../../assets/arrow.png";
import Header from "../../components/Header/Header";
import { getDayMovies } from "../../services/getDayMovies";
import { getGenres } from "../../services/getGenres";
import { dateFormat } from "../../services/dateFormat";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  
  useEffect(() => { getDayMovies(setMovies, page)}, [page]);
  useEffect(() => { getGenres(setGenres)}, []);

  const navigateMovie = (param) => {
    navigate(`/details/${param}`)
  }

  const renderMovies = movies && movies.map((movie) => {
      if (filter === "") {
        return (
          <S.MovieCard key={movie.id}>
            <S.MovieImg onClick={() => navigateMovie(movie.id)} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster do filme"/>
            <S.MovieTitle>{movie.original_title}</S.MovieTitle>
            <S.MovieDate>{dateFormat(movie.release_date)}</S.MovieDate>
          </S.MovieCard>
        );
      } else if (filter === movie.genre_ids[0] || filter === movie.genre_ids[1] || filter === movie.genre_ids[2] || filter === movie.genre_ids[3]) {
        return (
          <S.MovieCard key={movie.id}>
            <S.MovieImg onClick={() => navigateMovie(movie.id)} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster do filme"/>
            <S.MovieTitle>{movie.original_title}</S.MovieTitle>
            <S.MovieDate>{dateFormat(movie.release_date)}</S.MovieDate>
          </S.MovieCard>
        );
      } else {
        return undefined;
      }
    });

  const renderGender = genres && genres.map((genre) => {
      if (genre.id === filter) {
        return (
          <S.GenresCardChoosed key={genre.id}>
            <S.GenresP onClick={() => setFilter(genre.id)}>{genre.name}</S.GenresP>
            <img src={cancel} alt="icone para cancelar gênero" onClick={() => setFilter("")}/>
          </S.GenresCardChoosed>
        );
      } else {
        return (
          <S.GenresCard key={genre.id}>
            <S.GenresP onClick={() => setFilter(genre.id)}>{genre.name}</S.GenresP>
          </S.GenresCard>
        );
      }
    });

  return (
    <>
      <Header />
      <S.FilterDiv>
        <S.FilterH2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</S.FilterH2>
        <S.FilterP>Filtre por: </S.FilterP>
        <S.DivGenres>{renderGender}</S.DivGenres>
      </S.FilterDiv>
      <S.MoviesDiv>{renderMovies}</S.MoviesDiv>
      <S.DivPag>
        <S.PPag onClick={() => setPage(1)}>1</S.PPag>
        <S.PPag onClick={() => setPage(2)}>2</S.PPag>
        <S.PPag onClick={() => setPage(3)}>3</S.PPag>
        <S.PPag onClick={() => setPage(4)}>4</S.PPag>
        <S.PPag onClick={() => setPage(5)}>5</S.PPag>
        <S.ImgPag src={arrow} alt="flecha para paginação" onClick={() => setPage(page + 1)}/>
        <S.PPag onClick={() => setPage(500)}>Última</S.PPag>
      </S.DivPag>
    </>
  );
};

export default Home;
