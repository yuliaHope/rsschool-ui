import axios from 'axios';
import { IAssignment, IAssignmentDocument } from 'core/models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentsPostResponse = IAssignmentDocument;

export function getAssignmentsByCourseId(courseId: string) {
    return {
        assignments: [
            {
                _id: 1,
                taskId: 1,
                courseId: 1,
                studentId: 1,
                mentorId: 1,
                studentComment: 'studentComment',
                mentorComment: 'mentorComment',
                score: 100,
                assignmentRepo: 'https://github.com/rolling-scopes-school/tasks',
                deadlineDate: 31012018,
                completeDate: 31012018,
                checkDate: 31012018,
                status: 'Assigned',
            },
        ],
    };
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/assignments`);
}

export function submitSolutionApi(assignments: IAssignment) {
    return axios.post<AssignmentsPostResponse>(`/api/assignments`, assignments).then(response => response.data);
}
