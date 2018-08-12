import axios from 'axios';
import { IAssignment, IAssignmentDocument } from 'core/models';

type AssignmentResponse = {
    data: IAssignmentDocument[];
};

type AssignmentsPostResponse = IAssignmentDocument;

const assignments: any = [
    {
        _id: 1,
        taskId: 0,
        courseId: 1,
        studentId: 'Kaktu@DESKTOP-O8TKJ9S',
        mentorId: 1,
        studentComment: 'studentComment',
        mentorComment: 'mentorComment',
        score: 100,
        assignmentRepo: 'https://github.com/rolling-scopes-school/tasks',
        deadlineDate: 31012018,
        completeDate: 31012018,
        checkDate: 31012018,
        status: 'Checked',
    },
    {
        _id: 1,
        taskId: 1,
        courseId: 1,
        studentId: 'Kaktu@DESKTOP-O8TKS',
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
];

export function getAssignmentsById(courseId: string, studentId: string) {
    return assignments;
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/assignments/${studentId}`);
}

export async function submitSolutionApi(assignment: IAssignment) {
    const { taskId } = assignment;
    assignments[taskId].assignmentRepo = assignment.assignmentRepo;
    assignments[taskId].studentComment = assignment.studentComment;
    assignments[taskId].status = 'Checked';
    assignments[taskId].score = Math.floor(Math.random() * 100);
    return axios.post<AssignmentsPostResponse>(`/api/assignments`, assignment).then(response => response.data);
}
