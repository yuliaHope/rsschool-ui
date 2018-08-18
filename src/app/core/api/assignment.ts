import axios from 'axios';

import { IAssignmentDocument } from '../models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentPatchResponse = {
    data: IAssignmentDocument;
};

export function getAssignmentsByCourseId(courseId: string) {
    return axios
        .get<AssignmentResponse>(`/api/course/${courseId}/assignments`)
        .then(assignments => assignments.data.data);
}

export function submitAssignmentApi(assignment: IAssignmentDocument) {
    return axios.patch<AssignmentPatchResponse>(`/api/assignment`, assignment).then(response => response.data.data);
}
