import { Levels } from "../constants/language-level.enum";
import { LevelLanguage } from "./level-language-data.model";

export interface Languages {
    languageName: string;
    level: Levels;
}
