export default interface Semester {
    title: string,
    description: string,
    grade?: "Unsatisfactory" | "Satisfactory" | "Good" | "Outstanding" | "Passed",
    type?: "Internship" | "Minor" | "Specialisation"
}
