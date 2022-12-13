import { Languages } from "./languages-data.model";
import { Technologies } from "./technologies-data.model";

export interface SkillData {
    technologies: Technologies[];
    isActive: boolean;
    language: Languages[];
}
