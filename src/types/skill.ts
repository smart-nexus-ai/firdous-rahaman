export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}

export interface Tool {
    name: string;
    icon: string;
}