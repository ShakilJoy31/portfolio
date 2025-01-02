export interface Skill {
    id: number;
    proficiencyIn: string;
    capability: number;
    logo: string;
    createdAt: string;
    updatedAt: string;
}

export interface SkillsResponse {
    message: string;
    skills: Skill[];
}
