import styled, { keyframes } from 'styled-components';

export const Hero = () => {
    const stack = ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'AWS', 'Linux'];

    const handleDownloadCV = () => {
        const cvFile = '/juan-panasiti-cv.pdf';
        window.open(cvFile, '_blank');
    };
    return (
        <StyledSection>
            <StyledBackground>
                <StyledImgCover />
                <StyledContent>
                    <StyledText>{'<FullstackDev  english="B1" />'}</StyledText>
                    <StyledTitle>Juan M. Panasiti</StyledTitle>
                    <StyledText>{stack.join(' | ')}</StyledText>
                    <StyledBtnContainer>
                        <StyledCTA onClick={handleDownloadCV}>Descargar CV</StyledCTA>
                    </StyledBtnContainer>
                </StyledContent>
            </StyledBackground>
        </StyledSection>
    );
};

const sh02 = keyframes`
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.4);
  }

  40% {
    transform: rotate(50deg) scale(0.4);
  }
`;
export const StyledSection = styled.section`
    min-height: 100vh;
    max-width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
`;
const StyledBackground = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('hero.png');
    background-size: cover;
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
    padding-left: 5rem;
    height: 100%;
`;
const StyledTitle = styled.h1`
    color: whitesmoke;
    font-size: 6rem;
`;
const StyledText = styled.div`
    color: whitesmoke;
    font-size: 1.2rem;
    font-family: 'Inconsolata';
`;
const StyledCTA = styled.a`
    position: relative;
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid rgb(61, 106, 255);
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;

    &:hover {
        background: rgb(61, 106, 255);
        box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    &:hover::before {
        -webkit-animation: ${sh02} 0.5s 0s linear;
        -moz-animation: ${sh02} 0.5s 0s linear;
        animation: ${sh02} 0.5s 0s linear;
    }
    &::before {
        content: '';
        display: block;
        width: 0px;
        height: 86%;
        position: absolute;
        top: 7%;
        left: 0%;
        opacity: 0;
        background: #fff;
        box-shadow: 0 0 50px 30px #fff;
        -webkit-transform: skewX(-20deg);
        -moz-transform: skewX(-20deg);
        -ms-transform: skewX(-20deg);
        -o-transform: skewX(-20deg);
        transform: skewX(-20deg);
    }
    &:active {
        box-shadow: 0 0 0 0 transparent;
        -webkit-transition: box-shadow 0.2s ease-in;
        -moz-transition: box-shadow 0.2s ease-in;
        transition: box-shadow 0.2s ease-in;
    }
`;
const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
`;
