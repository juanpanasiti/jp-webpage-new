export interface Project {
    title: string;
    type: 'front' | 'back' | 'mobile' | 'other';
    description: string;
    screenshot?: string;
    githubUrl: string;
    demoUrl?: string;
    techs: string[];
}

export const projectList: Project[] = [
    {
        title: 'JP-Webpage',
        type: 'front',
        description:
            'Esta misma web que estas viendo',
        githubUrl: 'https://github.com/juanpanasiti/jp-webpage',
        techs: ['React', 'TypeScript', 'Styled Components'],
    },
    {
        title: 'SaveMyWallet',
        type: 'front',
        description:
            'Front del proyecto para gestionar gastos con las tarjetas de crédito y proyectar el consumo de los gastos cargados en las mismas.',
        githubUrl: 'https://github.com/juanpanasiti/smw-front',
        techs: ['React', 'Redux', 'TypeScript', 'Styled Components'],
    },
    {
        title: 'SaveMyWallet',
        type: 'back',
        description:
            'API del proyecto de gestión de gastos de tarjetas, utiliza autenticación por JWT y está desarrollado con FastAPI',
        githubUrl: 'https://github.com/juanpanasiti/smw-back',
        techs: ['Python', 'FastAPI', 'PostgreSQL', 'JWT'],
    },
    {
        title: 'FastAPI-base',
        type: 'back',
        description:
            'Template base de una api con configuraciones mínimas necesarias para la mayoría de mis proyectos con FasAPI',
        githubUrl: 'https://github.com/juanpanasiti/fastapi-base',
        techs: ['Python', 'FastAPI', 'JWT'],
    },
    {
        title: 'Movie DB con Django',
        type: 'back',
        description:
            'Pequeña app con Django para un curso (como tutor) de Django en Coderhouse',
        githubUrl: 'https://github.com/juanpanasiti/tmdb_django',
        techs: ['Python', 'Django'],
    },
    {
        title: 'Wave Store',
        type: 'back',
        description:
            'Front desarrollado en grupo para un curso de Fullstack de la academia Numen',
        githubUrl: 'https://github.com/juanpanasiti/proyecto-Wave',
        techs: ['Python', 'Django'],
    },
];
