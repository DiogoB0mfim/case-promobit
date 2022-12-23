import * as S from "../../styles/DetailsStyled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { getMovieById } from "../../services/getMovieById";
import { getMovieCredits } from "../../services/getMovieCredits";
import { getTrailer } from "../../services/getTrailer";
import { getRecommendations } from "../../services/getRecommendations";
import Header from "../../components/Header/Header";
import { dateFormat } from "../../services/dateFormat";
// Imports para rodar video do youtube
import YouTube from "react-youtube";
// Imports da barra de progresso circular
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Details = () => {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {getMovieById(id, setMovie)}, [id]);
  useEffect(() => {getMovieCredits(id, setCredits)}, [id]);
  useEffect(() => {getTrailer(id, setTrailer)}, [id]);
  useEffect(() => {getRecommendations(id, setRecommendations)}, [id]);

  const navigateMovie = (param) => {
    navigate(`/details/${param}`);
    window.location.reload();
  };

  let opts = {
    height: "460",
    width: "940",
  };

  if (window.screen.width <= 1152) {
    opts = {
      height: "360",
      width: "400",
    };
  }

  // Variáveis data de lançamento e país de produção
  let releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : undefined;
  let releaseDate = movie.release_date ? dateFormat(movie.release_date) : undefined;
  let prodCountry = movie.production_countries ? movie.production_countries[0].iso_3166_1 : undefined;

  // Variáveis para tempo de duração do filme
  const runtimeToFixed = (movie.runtime / 60).toFixed(2);
  const runtimeHour = runtimeToFixed.slice(0, 1);
  const runtimeMinutes = runtimeToFixed.slice(2, 4);

  // Variáveis para votação do filme
  let voteAverage = movie.vote_average ? movie.vote_average.toFixed(1).replace(".", ""): "";

  const genresMap = movie.genres && movie.genres.map((genre) => {
      return <p key={genre.name}>{genre.name}</p>;
    });

  const directorFilter = credits.crew && credits.crew.filter((job) => {
      return job["job"] === "Director" ? job : undefined;
    });

  const charactersFilter = credits.cast && credits.cast.filter((character, index) => {
      return index < 2 ? character : undefined;
    });

  const screePlayFilter = credits.crew && credits.crew.filter((job) => {
      return job["department"] === "Writing" ? job : undefined;
    });

  const trailerFilter = trailer && trailer.filter((trailer) => {
      return trailer["type"] === "Trailer" ? trailer : undefined;
    });

  const castMap = credits.cast && credits.cast.map((cast) => {
      return (
        <S.CardCaster key={cast.id}>
          <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt="imagem do ator"/>
          <S.CasterName>{cast.name}</S.CasterName>
          <S.CasterCharacter>{cast.character}</S.CasterCharacter>
        </S.CardCaster>
      );
    });

  const recommendationsMap = recommendations && recommendations.map((recommendation, index) => {
      if (index < 6) {
        return (
          <S.RecommendationCard key={recommendation.id}>
            <S.MovieImg onClick={() => navigateMovie(recommendation.id)} src={`https://image.tmdb.org/t/p/original${recommendation.poster_path}`} alt="poster do filme"/>
            <S.RecommendationTitle>{recommendation.original_title}</S.RecommendationTitle>
            <S.MovieDate>{dateFormat(recommendation.release_date)}</S.MovieDate>
          </S.RecommendationCard>
        );
      }

      return undefined;
    });

  let trailerKey = trailerFilter;

  if (trailerFilter.length > 0) {
    trailerKey = trailerKey[0].key;
  }

  return (
    <>
      <Header />
      <S.ContainerMovieInfo>
        <S.DetailsPoster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="poster do filme"
        />
        <S.DivInfos>
          <S.MovieTitle>
            {movie.original_title} ({releaseYear})
          </S.MovieTitle>
          <S.DivGenders>
            <p>{releaseDate} ({prodCountry})</p>
            {genresMap}
            <p>{runtimeHour}h {runtimeMinutes}m</p>
          </S.DivGenders>
          <S.DivProgress>
            <CircularProgressbar
              background
              value={voteAverage}
              maxValue={100}
              text={`${voteAverage}%`}
              styles={buildStyles({
                backgroundColor: "#3c2a58",
                textColor: "#14FF00",
                pathColor: "#14FF00",
                trailColor: "transparent",
              })}
            />
            <S.PDivProgress>User rating</S.PDivProgress>
          </S.DivProgress>
          <S.DivSynopsis>
            <S.DivSynopsish3>Synopsis</S.DivSynopsish3>
            <S.DivSynopsisP>{movie.overview}</S.DivSynopsisP>
          </S.DivSynopsis>
          <S.DivCast>
            <div>
              <div>
                <S.PCast><b>{charactersFilter ? charactersFilter[0].name : "sem informações do personagem"}</b></S.PCast>
                <S.PCastJob>Character</S.PCastJob>
              </div>
              <div>
                <S.PCast><b>{screePlayFilter ? screePlayFilter[0].name : "sem informações do escritor"}</b></S.PCast>
                <S.PCastJob>Screenplay</S.PCastJob>
              </div>
            </div>
            <div>
              <S.PCast><b>{charactersFilter ? charactersFilter[1].name : "sem informações do personagem"}</b></S.PCast>
              <S.PCastJob>Character</S.PCastJob>
            </div>
            <div>
              <S.PCast><b>{directorFilter ? directorFilter[0].name : "sem informações do diretor"}</b></S.PCast>
              <S.PCastJob>Director</S.PCastJob>
            </div>
          </S.DivCast>
        </S.DivInfos>
      </S.ContainerMovieInfo>
      <S.CastSlider>{castMap}</S.CastSlider>
      <S.YtDiv>
        <h3>Trailer</h3>
        <YouTube videoId={trailerKey} opts={opts} />
      </S.YtDiv>
      <S.DivTitleRecommendations>
        <S.H3Recommendations>Recomendações</S.H3Recommendations>
        <S.RecommendationsDiv>{recommendationsMap}</S.RecommendationsDiv>
      </S.DivTitleRecommendations>
    </>
  );
};

export default Details;
