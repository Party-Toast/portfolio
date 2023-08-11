import Skill from "./skill.model";

export default interface Experience {
    project: string;
    description: string;
    company: string;
    skillsApplied: Skill[];
    imageUrl: string;
}