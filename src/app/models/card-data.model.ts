import { ExperienceData } from './experience-data.model';
import { EducationData } from './education-data.model';
import { AchievementData } from './achievement-data.model';
import { SkillData } from './skill-data.model';

export interface CardData {
    skills: SkillData
    experience: ExperienceData
    education: EducationData
    achievements: AchievementData
}
