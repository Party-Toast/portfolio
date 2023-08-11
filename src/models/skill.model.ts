export default interface Skill {
    title: string;
    icon: string;
    description: string;
    subSkills?: Skill[];
}