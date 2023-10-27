export default interface Semester {
    title: string,
    description: string,
    grade?: "Unsatisfactory" | "Satisfactory" | "Good" | "Outstanding" | "Completed",
    type?: "Internship" | "Minor" | "Specialisation"
}
