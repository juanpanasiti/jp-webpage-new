import styled from 'styled-components';

import { StyledSection } from '../shared/StyledComponents';
import { projectList } from '../../data/projects.data';
import { ProjectCard } from '../projects/ProjectCard';

export const Projects = () => {
    return (
        <StyledSection>
            <StyledBackground>
                <StyledImgCover />
                <StyledContent>
                    <StyledTitle>Proyectos</StyledTitle>
					<StyledParagraph>Estos son algunos de mis proyectos personales</StyledParagraph>

                    <StyledProjectContainer>
                        {projectList.map(project => (
                            <ProjectCard project={project} />
                        ))}
                    </StyledProjectContainer>
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
    font-size: 1.3rem;
    margin: 0.5rem 1.5rem;
    line-height: 1.5;
    b {
        color: rgba(255, 61, 61, 0.7);
    }
`;
const StyledBackground = styled.div`
    position: relative;
    width: 100%;
    background-image: url('projects.png');
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
const StyledProjectContainer = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Ancho de las columnas */
    gap: 20px; /* Espaciado entre las cards */
`;
