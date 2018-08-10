import axios from 'axios';

import { IAssignmentDocument, IAssignment } from '../models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentsPostResponse = IAssignmentDocument;

export function getAssignmentsByCourseId(courseId: string) {
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/assignments`);
}

export function submitSolutionApi(assignments: IAssignment) {
    return axios.post<AssignmentsPostResponse>(`/api/assignments`, assignments).then(response => response.data);
}
