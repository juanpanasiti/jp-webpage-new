import styled from 'styled-components';

import { StyledSection } from "../shared/StyledComponents"
import { SkillCard } from "../skills/SkillCard"
import { languagesList, toolsList } from '../../data/skills.data';

export const Skills = () => {
  return (
    <StyledSection>
      <StyledTitle>Skills</StyledTitle>
      <StyledSubtitle>Lenguajes y Frameworks</StyledSubtitle>
      <StyledSkillContainer>
        {
          languagesList.map(skill => <SkillCard skill={skill} />)
        }
      </StyledSkillContainer>

      <StyledSubtitle>Otras Herramientas</StyledSubtitle>
      <StyledSkillContainer>
        {
          toolsList.map(skill => <SkillCard skill={skill} />)
        }
      </StyledSkillContainer>
    </StyledSection>
  )
}

const StyledTitle = styled.h2`
    color: whitesmoke;
    font-size: 3rem;
    color: rgb(61, 106, 255);
`;

const StyledSubtitle = styled.h3`
    font-size: 2rem;
    margin-left: 1rem;
    color: rgba(61, 106, 255, 0.7);
    margin-bottom: 1rem;
`;
const StyledSkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 20px;
    column-gap: 20px;

    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px; */
`;
