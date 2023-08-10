export default interface Skill {
    text: string;
    icon: string;
    description: string;
    subSkills?: Skill[];
}