import Skill from "./skill.model";

export default interface Project {
    project: string;
    description: string;
    company: string;
    skillsApplied: Skill[];
    imageUrl: string;
    type: "Group Project" | "Personal Project" | "Internship Project";
}