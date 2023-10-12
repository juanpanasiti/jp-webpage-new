export interface SkillItem {
    title: string;
    hint: string;
    image: string;
    description: string;
}

export const languagesList: SkillItem[] = [
    {
        title: 'FastAPI',
        hint: 'Python Framework',
        image: '/skills/fastapi.png',
        description: 'Framework que más he usado de python y en mi tabajo en general',
    },
    {
        title: 'Django',
        hint: 'Python Framework',
        image: '/skills/django.png',
        description: 'Mi experiencia se limita a mis tutorías en CoderHouse principalmente.',
    },
    {
        title: 'Flask',
        hint: 'Python Framework',
        image: '/skills/flask.png',
        description: 'No es mi favorito, pero fue el primero. Liviano y flexible.',
    },
    {
        title: 'Python',
        hint: 'Lenguaje Base',
        image: '/skills/python-lang.png',
        description:
            'Aparte de ser base para varios de los frameworks que manejo, también lo utilizo profesionalmente para scripting y automatizar algunas tareas.',
    },
    {
        title: 'React',
        hint: 'Librería JS',
        image: '/skills/react.png',
        description: 'Librería que más utilizo actualmente para el front. De preferencia con Vite.js y TypeScript.',
    },
    {
        title: 'Node.js',
        hint: 'Runtime Environment',
        image: '/skills/node.png',
        description: 'Mayormente lo utilizo con express y para proyectos personales.',
    },
    {
        title: 'JavaScript/TypeScript',
        hint: 'Lenguaje Base',
        image: '/skills/js-ts.png',
        description:
            'Conicimientos en ambos pero solo los utilizo con librerías (como React) o frameworks (como Express, Nest o React Native).',
    },
];

export const toolsList: SkillItem[] = [
    {
        title: 'Linux',
        hint: 'Sistema Operativo',
        image: '/skills/linux.png',
        description: 'Mi sistema operativo del día a día, de preferencia LinuxMint. La terminal es mi aliada!',
    },
    {
        title: 'VS Code',
        hint: 'IDE',
        image: '/skills/vscode.png',
        description: 'Tanto para python como para JS/TS, VSCode es mi herramienta de desarrollo favorita.',
    },
    {
        title: 'Postman',
        hint: 'IDE',
        image: '/skills/postman.png',
        description: 'Tanto para backend como para frontend, manejar una herramienta como postman es un must!',
    },
    {
        title: 'Jenkins',
        hint: 'Herramienta de CD',
        image: '/skills/jenkins.png',
        description:
            'No es lo normal ni mi día a día, pero he llegado no solo a automatizar tareas de deploy sino instalar y configurar instancias tanto local como en servidores EC2.',
    },
];
