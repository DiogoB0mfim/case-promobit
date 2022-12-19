import * as S from "../../styles/HeaderStyled"
import logo from "../../assets/logo_tmdb.png"

const Header = () => {
    return (
        <>
        <S.Header>
            <a href="/"><S.ImgLogo src={logo} alt="logo tmdb"/></a>
        </S.Header>
        </>
    )
}

export default Header;