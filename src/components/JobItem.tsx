import { FC } from 'react';

import styled from 'styled-components';
import { Job } from '../data/jobs.data';

interface Props {
    job: Job;
}
export const JobItem: FC<Props> = ({ job }) => {
    return (
        <StyledJobContainer>
            <StyledPlaceTitle>
                {job.companyName} <span>- {job.modality}</span>
            </StyledPlaceTitle>
            <StyledJobPeriod>{job.period}</StyledJobPeriod>
            <StyledRole>{job.role}</StyledRole>
            <StyledJobDescription>
                <StyledSubtitle>Descripción del Puesto</StyledSubtitle>
                {job.description.map(paragraph => (
                <StyledParagraph dangerouslySetInnerHTML={{__html: paragraph}} />
                ))}
            </StyledJobDescription>
            <StyledExperience>
                <StyledSubtitle>Experiencia</StyledSubtitle>
                {job.experience.map(paragraph => (
                    <StyledParagraph dangerouslySetInnerHTML={{__html: paragraph}} />
                ))}
            </StyledExperience>
        </StyledJobContainer>
    );
};

const StyledJobContainer = styled.div`
    margin: 0.5rem 1rem;
`;
const StyledPlaceTitle = styled.div`
    font-size: 1.7rem;
    span {
        font-size: 1rem;
        font-family: 'Inconsolata';
        color: #f5f5f5aa;
    }
`;
const StyledJobPeriod = styled.div`
    font-family: 'Inconsolata';
`;
const StyledRole = styled.div`
    font-family: 'Inconsolata';
    margin-top: 0.5rem;
    font-size: 1.5rem;
`;
const StyledJobDescription = styled.div`
    /*  */
`;
const StyledExperience = styled.div`
    /*  */
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
const StyledSubtitle = styled.h3`
    font-size: 2rem;
    margin-left: 1rem;
    color: rgba(61, 106, 255, 0.7);
`;
