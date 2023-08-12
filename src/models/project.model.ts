import Skill from "./skill.model";

export default interface Project {
    project: string;
    description: string;
    company: string;
    skillsApplied: Skill[];
    imageUrl: string;
}