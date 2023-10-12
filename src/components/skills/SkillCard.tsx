import { FC } from 'react';

import './skill-card.css';
import { SkillItem } from '../../data/skills.data';

interface Props {
    skill: SkillItem
}
export const SkillCard: FC<Props> = ({skill}) => {
    return (
        <div className="skill-card">
            <img className='img' src={skill.image} />
            <div className="textBox">
                <p className="text head">{skill.title}</p>
                <span>{skill.hint}</span>
                <p className="text description">{skill.description}</p>
            </div>
        </div>
    );
};
