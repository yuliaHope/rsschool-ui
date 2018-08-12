import axios from 'axios';

import { IAssignmentDocument, IAssignment } from '../models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentsPostResponse = IAssignmentDocument;

const data = {
    assignments: [
        {
            _id: 1,
            taskId: 1,
            courseId: 1,
            studentId: 1,
            mentorId: 1,
            studentComment: 'studentComment',
            mentorComment: 'mentorComment',
            score: null,
            assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
            deadlineDate: 1537477140000,
            completeDate: 123,
            checkDate: 1,
            status: 'Assigned',
        },
        {
            _id: 2,
            taskId: 2,
            courseId: 2,
            studentId: 2,
            mentorId: 2,
            studentComment: 'studentComment',
            mentorComment: 'mentorComment',
            score: 100,
            assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
            deadlineDate: 1537477140000,
            completeDate: 123,
            checkDate: 2,
            status: 'Assigned',
        },
        {
            _id: 3,
            taskId: 2,
            courseId: 2,
            studentId: 2,
            mentorId: 2,
            studentComment: 'studentComment',
            mentorComment: 'mentorComment',
            score: null,
            assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
            deadlineDate: 1,
            completeDate: 123,
            checkDate: 2,
            status: 'Assigned',
        },
        {
            _id: 4,
            taskId: 2,
            courseId: 2,
            studentId: 2,
            mentorId: 2,
            studentComment: 'studentComment',
            mentorComment: 'mentorComment',
            score: 80,
            assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
            deadlineDate: 1537477140000,
            completeDate: 123,
            checkDate: 2,
            status: 'Assigned',
        },
        {
            _id: 5,
            taskId: 2,
            courseId: 2,
            studentId: 2,
            mentorId: 2,
            studentComment: 'studentComment',
            mentorComment: 'mentorComment',
            score: null,
            assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
            deadlineDate: 123,
            completeDate: 123,
            checkDate: 2,
            status: 'Assigned',
        },
        {
            _id: 6,
            taskId: 2,
            courseId: 2,
            studentId: 2,
            mentorId: 2,
            studentComment: 'studentComment',
            mentorComment: 'mentorComment',
            score: null,
            assignmentRepo: 'https://github.com/rolling-scopes/rsschool-docs/tree/mvp',
            deadlineDate: 1537477140000,
            completeDate: 123,
            checkDate: 2,
            status: 'Assigned',
        },
    ],
};

export function getAssignmentsByCourseId(courseId: string) {
    return data;
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/assignments`);
}

export function submitSolutionApi(assignments: IAssignment) {
    return axios.post<AssignmentsPostResponse>(`/api/assignments`, assignments).then(response => response.data);
}