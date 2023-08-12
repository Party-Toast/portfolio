export default interface Skill {
    title: string;
    icon: string;
    description: string;
    subSkills?: SubSkill[];
}

interface SubSkill {
    title: string;
    description: string;
}