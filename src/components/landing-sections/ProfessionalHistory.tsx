import styled from 'styled-components';

import { StyledSection } from '../shared/StyledComponents';

export const ProfessionalHistory = () => {
    return (
        <StyledSection>
            <StyledBackground>
                <StyledImgCover />
                <StyledContent>
                    <StyledTitle>Mis trabajos</StyledTitle>

                    {/* Conectapps/CloudSolutions */}
                    <StyledJobContainer>
                        <StyledPlaceTitle>
                            Conectapps (Parte de Cloud Solutions) <span>- remoto</span>
                        </StyledPlaceTitle>
                        <StyledJobPeriod>Octubre 2022 - Actualidad</StyledJobPeriod>
                        <StyledRole>Ssr. Python + React</StyledRole>
                        <StyledJobDescription>
                            <StyledSubtitle>Descripción del Puesto</StyledSubtitle>
                            <StyledParagraph>
                                <b>Backend:</b> Diseño y desarrollo de APIs con FastAPI y scripts de automatización y
                                sincronización de información para algunos proyectos que lo requerían. Principales
                                tecnologías utilizadas fueron FastAPI, SQLAlchemy, PostgreSQL, Alembic, Docker, Git,
                                entre otras.
                            </StyledParagraph>
                            <StyledParagraph>
                                <b>Frontend:</b> Diseño y desarrollo de una plataforma de gestión de flota de vehículos.
                                Se desarrolló con React + TypeScript utilizando además tecnologías como Redux Toolkit,
                                React Query, Axios, Styled Components, Git, etc.
                            </StyledParagraph>
                            <StyledParagraph>
                                <b>Otras responsabilidades:</b> Coordinar, dirigir y mentorear al equipo de uno de los
                                proyectos, gestionar servidores (EC2 de AWS), deployar los proyectos en los distintos
                                ambientes (incluída la configuración en Jenkins para el Continuous Deployment). También
                                tenía a cargo las reuniónes periódicas con el cliente.
                            </StyledParagraph>
                        </StyledJobDescription>
                        <StyledExperience>
                            <StyledSubtitle>Experiencia</StyledSubtitle>
                            <StyledParagraph>
                                Este ha sido hasta ahora uno de los mayores desafíos que he tenido y que me ha llevado
                                mucho más allá de solo tener que programar. Tuve la oportunidad de participar en la toma
                                de decisiones de las tecnologías a implementar en grandes proyectos; instruir y
                                mentorear a compañeros de trabajo juniors; gestionar, configurar y mantener servidores
                                en AWS; deployar en distintos ambientes varios proyectos (tanto de forma manual como
                                automatizando el proceso con Jenkins); y hasta pude liderar al equipo de desarrollo de
                                uno de los proyectos!
                            </StyledParagraph>
                        </StyledExperience>
                    </StyledJobContainer>
                    <hr />

                    {/* Comparaencasa.com */}
                    <StyledJobContainer>
                        <StyledPlaceTitle>
                            Comparaencasa.com <span>- remoto</span>
                        </StyledPlaceTitle>
                        <StyledJobPeriod>Octubre 2021 - Octubre 2022</StyledJobPeriod>
                        <StyledRole>Dev. Jr+. Python</StyledRole>
                        <StyledJobDescription>
                            <StyledSubtitle>Descripción del Puesto</StyledSubtitle>
                            <StyledParagraph>
                                Desarrollo de funciones en Python que conectaban el core principal de la plataforma con
                                los web service que exponían las aseguradoras
                            </StyledParagraph>
                        </StyledJobDescription>
                        <StyledExperience>
                            <StyledSubtitle>Experiencia</StyledSubtitle>
                            <StyledParagraph>
                                Primer acercamiento a la plataforma de AWS; Aunque no utilizaba ningún framework ni
                                tenia casi necesidad de tocar la base de datos, el mayor desafío estaba en adaptarme al
                                web service que exponía la aseguradora, ya que a veces era una api REST bien documentada
                                y otras (la mayoría) eran servicios SOAP o poco documentados (igualmente el equipo
                                siempre estaba dispuesto a tirar una mano).
                            </StyledParagraph>
                            <StyledParagraph>
                                Además, se hacía mucho foco en la calidad del código, por lo que pude aprender muchas de
                                las buenas prácticas que hoy ocupo en mi día a día.
                            </StyledParagraph>
                        </StyledExperience>
                    </StyledJobContainer>
                    <hr />

                    {/* ADEN Business School */}
                    <StyledJobContainer>
                        <StyledPlaceTitle>
                            ADEN Business School <span>- presencial</span>
                        </StyledPlaceTitle>
                        <StyledJobPeriod>Noviembre 2020 - Octubre 2021</StyledJobPeriod>
                        <StyledRole>Dev Jr. React + Python</StyledRole>
                        <StyledJobDescription>
                            <StyledSubtitle>Descripción del Puesto</StyledSubtitle>
                            <StyledParagraph>
                                <b>Frontend:</b> Desarrollo de una plataforma para el cursado de los alumnos. Se
                                desarrolló con React + JavaScript y utilizaba además tecnologías como Git, Redux.
                            </StyledParagraph>
                            <StyledParagraph>
                                <b>Backend:</b> Desarrollo y mantenimiento de APIs con FastAPI y Flask (también hice
                                algunos desarrollos en Odoo). Principales tecnologías utilizadas fueron FastAPI, Flask,
                                PostgreSQL, Odoo, Git, entre otras.
                            </StyledParagraph>
                            <StyledParagraph>
                                <b>Otras responsabilidades:</b> Monitorear el proceso deploy a los ambientes de dev y
                                prod de las tareas que se me asignaban.
                            </StyledParagraph>
                        </StyledJobDescription>
                        <StyledExperience>
                            <StyledSubtitle>Experiencia</StyledSubtitle>
                            <StyledParagraph>
                                Primer experiencia como desarrollador profesional de la mano de un equipazo que me dió
                                la oportunidad casi ni bien terminé la tecnicatura. Aprendí a trabajar en equipo, me
                                introduje al mundo de Python, desarrollo de APIs, trabajo con bases de datos,
                                autenticación con JWT y varias cosas más.
                            </StyledParagraph>
                        </StyledExperience>
                    </StyledJobContainer>
                </StyledContent>
            </StyledBackground>
        </StyledSection>
    );
};

const StyledTitle = styled.h2`
    font-size: 3rem;
    color: rgb(61, 106, 255);
`;
const StyledSubtitle = styled.h3`
    font-size: 2rem;
    margin-left: 1rem;
    color: rgba(61, 106, 255, 0.7);
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
