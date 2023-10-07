import styled from 'styled-components';

import { StyledSection } from '../shared/StyledComponents';

export const AboutMe = () => {
    return (
        <StyledSection>
            <StyledBackground>
                <StyledImgCover />
                <StyledContent>
                    <StyledTitle>Acerca de mi</StyledTitle>
                    <StyledParagraph>
                        ¡Hola! Soy un apasionado desarrollador fullstack con habilidades sólidas en el backend y
                        frontend (aunque mi fuerte es el back). Desde el año 2020, me he dedicado profesionalmente al
                        mundo de la programación, y cada día es un nuevo desafío que estoy emocionado de abordar.
                    </StyledParagraph>
                    {/* <StyledParagraph>
                Mi viaje en el desarrollo de software me ha llevado a convertir ideas en aplicaciones funcionales, ya
                sea creando potentes API o elegantes webapps. Desde la creación en mi entorno local hasta la
                implementación en servidores, me siento cómodo en cada etapa del proceso.
            </StyledParagraph> */}
                    <StyledParagraph>
                        Linux es mi entorno predilecto, y me muevo ágilmente en él, tanto en mi máquina local como en
                        servidores remotos. Siempre estoy dispuesto a aprender de mis mentores y colegas, y encontrar
                        soluciones creativas es una de las partes más emocionantes de mi trabajo.
                    </StyledParagraph>
                    <StyledParagraph>
                        Disfruto de la oportunidad de guiar y mentorizar a mis compañeros, compartiendo mi conocimiento
                        y experiencia para ayudar a otros a crecer. En cada proyecto, siempre doy el 100%, siendo
                        dedicado y proactivo para lograr resultados excepcionales.
                    </StyledParagraph>
                    <StyledParagraph>
                        Fuera de la programación, me gusta mucho el cine, soy fan de Star Wars (no le digas "La Guerra
                        de las Galaxias" por favor jaja..) tanto de las peliculas como de las novelas (sobre todo el
                        universo de "Legends").. para nada nerd (?)
                    </StyledParagraph>
                </StyledContent>
            </StyledBackground>
        </StyledSection>
    );
};

const StyledTitle = styled.h2`
    color: whitesmoke;
    font-size: 3rem;
    color: rgb(61, 106, 255);
`;
const StyledParagraph = styled.p`
    color: whitesmoke;
    font-size: 1.5rem;
    margin: 0.5rem;
    line-height: 1.5;
`;

const StyledBackground = styled.div`
    position: relative;
    width: 100%;
    background-image: url('dev-laptop.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
const StyledImgCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`;
const StyledContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* padding-left: 5rem; */
    height: 100%;
`;
