export interface Job {
    companyName: string;
    modality: 'presencial' | 'remoto' | 'híbrido';
    period: string;
    role: string;
    description: string[];
    experience: string[];
}

export const jobList: Job[] = [
    {
        companyName: 'Conectapps (Parte de Cloud Solutions)',
        period: 'Octubre 2022 - Octubre 2023',
        modality: 'remoto',
        role: 'Dev Ssr. Python + React',
        description: [
            '<b>Backend:</b> Diseño y desarrollo de APIs con FastAPI y scripts de automatización y sincronización de información para algunos proyectos que lo requerían. Principales tecnologías utilizadas fueron FastAPI, SQLAlchemy, PostgreSQL, Alembic, Docker, Git, entre otras.',
            '<b>Frontend:</b> Diseño y desarrollo de una plataforma de gestión de flota de vehículos. Se desarrolló con React + TypeScript utilizando además tecnologías como Redux Toolkit, React Query, Axios, Styled Components, Git, etc.',
            '<b>Otras responsabilidades:</b> Coordinar, dirigir y mentorear al equipo de uno de los proyectos, gestionar servidores (EC2 de AWS), deployar los proyectos en los distintos ambientes (incluída la configuración en Jenkins para el Continuous Deployment). También tenía a cargo las reuniónes periódicas con el cliente.',
        ],
        experience: [
            'Este ha sido hasta ahora uno de los mayores desafíos que he tenido y que me ha llevado mucho más allá de solo tener que programar. Tuve la oportunidad de participar en la toma de decisiones de las tecnologías a implementar en grandes proyectos; instruir y mentorear a compañeros de trabajo juniors; gestionar, configurar y mantener servidores en AWS; deployar en distintos ambientes varios proyectos (tanto de forma manual como automatizando el proceso con Jenkins); y hasta pude liderar al equipo de desarrollo de uno de los proyectos!',
        ],
    },
    {
        companyName: 'CoderHouse',
        period: 'Octubre 2021 - Marzo 2022',
        modality: 'remoto',
        role: 'Tutor Python/Django',
        description: ['Tutorías de Python y Django.'],
        experience: [
            'Primer acercamiento a mentorear y compartir lo que he aprendido.',
            'Solo estuve por un par de comisiones, luego por cuestiones de tiempo tuve que dejar, pero fue una de las experiencas más gratificantes.',
        ],
    },
    {
        companyName: 'Comparaencasa.com',
        period: 'Octubre 2021 - Octubre 2022',
        modality: 'remoto',
        role: 'Dev Jr. Adv. Python',
        description: [
            'Desarrollo de funciones en Python que conectaban el core principal de la plataforma con los web service que exponían las aseguradoras',
        ],
        experience: [
            'Primer acercamiento a la plataforma de AWS; Aunque no utilizaba ningún framework ni tenia casi necesidad de tocar la base de datos, el mayor desafío estaba en adaptarme al web service que exponía la aseguradora, ya que a veces era una api REST bien documentada y otras (la mayoría) eran servicios SOAP o poco documentados (igualmente el equipo siempre estaba dispuesto a tirar una mano).',
            'Además, se hacía mucho foco en la calidad del código, por lo que pude aprender muchas de las buenas prácticas que hoy ocupo en mi día a día.',
        ],
    },
    {
        companyName: 'ADEN Business School',
        period: 'Noviembre 2020 - Octubre 2021',
        modality: 'presencial',
        role: 'Dev Jr. React + Python',
        description: [
            '<b>Frontend:</b> Desarrollo de una plataforma para el cursado de los alumnos. Se desarrolló con React + JavaScript y utilizaba además tecnologías como Git, Redux.',
            '<b>Backend:</b> Desarrollo y mantenimiento de APIs con FastAPI y Flask (también hice algunos desarrollos en Odoo). Principales tecnologías utilizadas fueron FastAPI, Flask, PostgreSQL, Odoo, Git, entre otras.',
            '<b>Otras responsabilidades:</b> Monitorear el proceso deploy a los ambientes de dev y prod de las tareas que se me asignaban.',
        ],
        experience: [
            'Primer experiencia como desarrollador profesional de la mano de un equipazo que me dió la oportunidad casi ni bien terminé la tecnicatura. Aprendí a trabajar en equipo, me introduje al mundo de Python, desarrollo de APIs, trabajo con bases de datos, autenticación con JWT y varias cosas más.',
        ],
    },
];
