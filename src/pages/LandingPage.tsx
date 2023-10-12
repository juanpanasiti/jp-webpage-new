import {
    AboutMe,
    // ContactMe,
    // Education,
    Hero,
    ProfessionalHistory,
    Projects,
    Skills,
} from '../components/landing-sections';

export const LandingPage = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <ProfessionalHistory />
            {/* <Education /> */}
            <Skills />
            <Projects />
            {/* <ContactMe /> */}
        </>
    );
};
