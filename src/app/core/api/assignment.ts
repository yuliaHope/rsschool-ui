import axios from 'axios';
import { IAssignment, IAssignmentDocument } from 'core/models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentsPostResponse = IAssignmentDocument;

export function getAssignmentsById(courseId: string, studentId: string) {
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/assignment/${studentId}`);
}

export async function submitSolutionApi(assignment: IAssignment) {
    const { courseId, taskId, studentId } = assignment;
    return axios
        .post<AssignmentsPostResponse>(`/api/course/${courseId}/assignment/${studentId}/${taskId}`, assignment)
        .then(response => response.data);
}
