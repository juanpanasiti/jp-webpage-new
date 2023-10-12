import styled from 'styled-components';

import { StyledSection } from '../shared/StyledComponents';
import { jobList } from '../../data/jobs.data';
import { JobItem } from '../JobItem';

export const ProfessionalHistory = () => {
    return (
        <StyledSection>
            <StyledBackground>
                <StyledImgCover />
                <StyledContent>
                    <StyledTitle>Mis trabajos</StyledTitle>
                    {jobList.map(job => (
                        <JobItem job={job} />
                    ))}
                </StyledContent>
            </StyledBackground>
        </StyledSection>
    );
};

const StyledTitle = styled.h2`
    font-size: 3rem;
    color: rgb(61, 106, 255);
`;

const StyledBackground = styled.div`
    position: relative;
    width: 100%;
    background-image: url('work.webp');
    background-size: contain;

    background-repeat: no-repeat;
    background-position: right;
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
    color: whitesmoke;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    height: 100%;
`;
