import { Skill } from "./skill.model";

export default interface Project {
    title: string;
    description: string;
    company: string;
    skillsApplied: Skill[];
    imageUrl: string;
    type: string
}