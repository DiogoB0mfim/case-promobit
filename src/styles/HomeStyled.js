import styled from "styled-components";

// * Div de filtros
export const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #2d0c5e;
  color: #fff;
  padding: 50px;
`;

// * H2 da div de filtros
export const FilterH2 = styled.h2`
  text-align: center;
  width: 45%;
  font-size: 48px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 32px;
    text-align: start;
  }
`;

// * P da div de filtros
export const FilterP = styled.p`
  margin-top: -10px;
  margin-bottom: 30px;
  font-size: 16px;
`;

// * Div dos gêneros
export const DivGenres = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 55%;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: start;
    width: 100%;
    gap: 15px;
  }
`;

// * Card de cada gênero
export const GenresCard = styled.div`
  background-color: #ffff;
  color: #2d0c5e;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    transition: 0.2s;
    background-color: #d18000;
    color: #ffff;
  }

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const GenresCardChoosed = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #d18000;
  color: #ffff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  padding-left: 25px;
  padding-right: 25px;

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

// * P da div de gêneros
export const GenresP = styled.p`
  font-size: 16px;
`;

// * Div de filmes
export const MoviesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
`;

// * Card de cada filme
export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  text-align: start;
  padding-bottom: 30px;
`;

// * Titulo do filme
export const MovieTitle = styled.p`
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

// * Poster do filme
export const MovieImg = styled.img`
  width: 176px;
  height: 264px;
  border-radius: 5px;
  cursor: pointer;
`;

// * Div paginação
export const DivPag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem; ;
`;

// * P paginação
export const PPag = styled.p`
  font-size: 1.3rem;
  color: #5c16c5;
  cursor: pointer;
`;

// * img paginação
export const ImgPag = styled.img`
  cursor: pointer;
`;
