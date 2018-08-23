import axios from 'axios';
import { IAssignment, IAssignmentDocument } from 'core/models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentsPostResponse = IAssignmentDocument;

export async function getAssignmentsById(courseId: string, studentId: string) {
    const response = await axios.get<AssignmentResponse>(`/api/course/${courseId}/assignment/${studentId}`);
    return response.data.data;
}

export function submitSolutionApi(assignment: IAssignment) {
    const { courseId, taskId, studentId } = assignment;
    return axios
        .patch<AssignmentsPostResponse>(`/api/course/${courseId}/assignment/${studentId}/${taskId}`, assignment)
        .then(response => response.data);
}
