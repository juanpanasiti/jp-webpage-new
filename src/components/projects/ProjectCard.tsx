import { FC } from 'react';
import { Project } from '../../data/projects.data';
import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkIcon } from '../icons/LinkIcon';
import './project-card.css';
interface Props {
    project: Project
}
export const ProjectCard: FC<Props> = ({project}) => {
    return (
        <div className="card">
            <span className="title">{project.title} - {project.type}</span>
            <span className="techs">{project.techs.join(' | ')}</span>
            <span className="desc">
                {project.description}
            </span>
            <div className="buttons">
                <a href={project.githubUrl} target='_blank' className="button">
                    <span className="icon">
                        <GitHubIcon />
                    </span>
                    <div className="button-text google">
                        <span>Github</span>
                    </div>
                </a>
                <a href={project.demoUrl || 'https://google.com/404'} target='_blank' className="button">
                    <span className="icon">
                        <LinkIcon />
                    </span>
                    <div className="button-text apple">
                        <span>Demo</span>
                    </div>
                </a>
            </div>
        </div>
    );
};
