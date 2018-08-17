import axios from 'axios';

import { IAssignmentDocument } from '../models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

export function getAssignmentsByCourseId(courseId: string) {
    return axios
        .get<AssignmentResponse>(`/api/course/${courseId}/assignments`)
        .then(assignments => assignments.data.data);
}

export function submitSolutionApi(assignment: IAssignmentDocument) {
    return new Promise(res => {
        setTimeout(() => {
            res({
                ...assignment,
                score: Math.floor(0 + Math.random() * (100 + 1 - 0)),
                status: 'Checked',
            });
        }, 500);
    });
    // return axios.post<AssignmentsPostResponse>(`/api/assignments`, assignment).then(response => response.data);
}
