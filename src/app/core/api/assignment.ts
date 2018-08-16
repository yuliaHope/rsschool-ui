import axios from 'axios';

import { IAssignmentDocument } from '../models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

// type AssignmentsPostResponse = IAssignmentDocument;
/*
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
            score: null,
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
            score: null,
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
};*/

export function getAssignmentsByCourseId(courseId: string, userId: string) {
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/${userId}/assignments`);
}

export function getTasksByCourseId(courseId: string, userId: string) {
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/${userId}/tasks`);
}

export function getAssignmentsAndTasksByCourseId(courseId: string, userId: string) {
    return Promise.all([getAssignmentsByCourseId(courseId, userId), getTasksByCourseId(courseId, userId)]).then(
        ([assignments, tasks]) => ({
            assignments: assignments.data.data,
            tasks: tasks.data.data,
        }),
    );
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
