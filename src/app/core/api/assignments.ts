import axios from 'axios';

import { IAssignment } from '../models';

type AssignmentResponse = {
    data: IAssignment[];
};

export function getAssignments(courseId: string): Promise<IAssignment[]> {
    return axios.get<AssignmentResponse>(`/api/course/${courseId}/tasks`).then(response => response.data.data);
}

export function updateAssignments(courseId: string, data: any): Promise<IAssignment[]> {
    return axios.patch<AssignmentResponse>(`/api/course/${courseId}/tasks`, data).then(response => response.data.data);
}
