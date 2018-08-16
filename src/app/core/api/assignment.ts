import axios from 'axios';

import { IAssignmentDocument } from '../models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

export function getAssignmentsByCourseId(courseId: string) {
    return axios
        .get<AssignmentResponse>(`/api/course/${courseId}/assignments`)
        .then(assignments => ({ assignments: assignments.data.data }));
}

export function submitSolutionApi(assignment: IAssignmentDocument) {
    return new Promise(res => {
        setTimeout(() => {
            res({
                _id: assignment._id,
                taskId: 2,
                courseId: 2,
                studentId: 2,
                mentorId: 2,
                studentComment: 'studentComment',
                mentorComment: 'mentorComment',
                score: Math.floor(0 + Math.random() * (100 + 1 - 0)),
                assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
                deadlineDate: 1537477140000,
                completeDate: 123,
                checkDate: 2,
                status: 'Checked',
            });
        }, 500);
    });
    // return axios.post<AssignmentsPostResponse>(`/api/assignments`, assignment).then(response => response.data);
}
