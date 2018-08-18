import axios from 'axios';

import { IAssignmentModel } from '../models';

type AssignmentResponse = {
    data: IAssignmentModel[];
};

type AssignmentPatchResponse = {
    data: IAssignmentModel;
};

export function getAssignments(courseId: string) {
    return axios
        .get<AssignmentResponse>(`/api/course/${courseId}/assignments`)
        .then(assignments => assignments.data.data);
}

export function patchAssignments(assignment: IAssignmentModel) {
    return axios.patch<AssignmentPatchResponse>(`/api/assignment`, assignment).then(response => response.data.data);
}
