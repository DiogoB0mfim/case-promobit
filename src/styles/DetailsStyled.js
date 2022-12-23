import styled from "styled-components";

// * Estilização container da página de detalhes
export const ContainerMovieInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  background-color: #2d0c5e;
  color: #ffff;
  padding: 1rem;

  @media (max-width: 1152px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 32px;
`;

// * Estilização div de infos geral
export const DivInfos = styled.div`
  display: flex;
  justify-content: space-around;
  width: 66%;
  flex-direction: column;

  @media (max-width: 1152px) {
    width: 100%;
  }
`;

// * Estilização div de gêneros e data de lançamento
export const DivGenders = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 16px;
  width: 90%;
  color: #dddddd;
  margin-top: -80px;

  @media (max-width: 1152px) {
    flex-direction: column;
    margin-top: -30px;
    gap: 0rem;
    line-height: 0px;
  }
`;

// * Estilização div de progresso
export const DivProgress = styled.div`
  display: flex;
  width: 130px;
  padding: 10px;
  gap: 1rem;
  color: #dddddd;
  margin-top: -30px;

  @media (max-width: 1152px) {
    margin-top: 0px;
    padding: 0rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

// * Estilização do P da div de progresso
export const PDivProgress = styled.p`
  font-size: 16px;
`;

// * Estilização da imagem de poster do filme
export const DetailsPoster = styled.img`
  width: 382px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: -50px;

  @media (max-width: 1152px) {
    width: 280px;
  }
`;

// * Estilização da div de sinopse
export const DivSynopsis = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -30px;

  @media (max-width: 1152px) {
    margin-top: 0px;
  }
`;

// * Estilização do h3 da div de sinopse
export const DivSynopsish3 = styled.h3`
  font-size: 20px;
`;

// * Estilização do p da div de sinopse
export const DivSynopsisP = styled.p`
  font-size: 16px;
  margin-top: -3px;
  color: #dddddd;

  @media (max-width: 1152px) {
    margin-top: 0px;
  }
`;

// * Estilização da div de casters
export const DivCast = styled.div`
  display: flex;
  gap: 2rem;
  width: 90%;
  margin-top: -30px;

  @media (max-width: 1152px) {
    margin-top: 0px;
  }
`;

export const PCast = styled.p`
  font-size: 16px;
`;

export const PCastJob = styled.p`
  font-size: 16px;
  margin-top: -3px;
  color: #dddddd;
`;

// * Estilização slider elenco
export const CastSlider = styled.div`
  display: flex;
  overflow-y: auto;
  gap: 1rem;
  padding: 1rem 1rem 1rem 0.5rem;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 5%;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    background-color: #dddddd;
    height: 1rem;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #adadad;
    border-radius: 10px;
  }

  @media (max-width: 1152px) {
    margin-left: 0%;
  }
`;

export const CardCaster = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 10px 10px 0px 10px;
  border-radius: 4px;
`;

export const CasterName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const CasterCharacter = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

// * Estilização div do youtube
export const YtDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 6%;

  @media (max-width: 1152px) {
    align-items: center;
    margin-left: 0%;
  }
`;

// * Estilização Title recomendações
export const DivTitleRecommendations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H3Recommendations = styled.h3`
  margin-left: 5.3%;

  @media (max-width: 1152px) {
    text-align: center;
    margin-left: 0%;
  }
`;

// * Estilização div de recomendações
export const RecommendationsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
`;

// * Card de cada filme
export const RecommendationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  text-align: start;
  padding-bottom: 30px;
`;

// * Poster do filme
export const MovieImg = styled.img`
  width: 196px;
  height: 274px;
  border-radius: 5px;
  cursor: pointer;
`;

// * Titulo do filme
export const RecommendationTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  width: 179px;
`;

// * Data do filme
export const MovieDate = styled.p`
  margin-top: -10px;
  font-size: 14px;
  font-weight: 700;
  color: #646464;
  width: 180px;
  text-align: start;
`;
