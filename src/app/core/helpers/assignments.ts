// import { DateTime, Interval } from 'luxon';

import { IAssignmentDocument, AssignmentStatus } from '../models';

type INormalizeAssignments = {
    isEndAssignment: boolean;
    assignment: IAssignmentDocument;
};

export type NormalizeAssignmentsData = {
    assignment: INormalizeAssignments[];
};

export const getNormalizeAssignmentsData = (assignments: IAssignmentDocument[]): NormalizeAssignmentsData[] => {
    const sortedAssignments = assignments.reduce<INormalizeAssignments[]>((res, assignment) => {
        if (assignment.status === AssignmentStatus.Assigned && assignment.deadlineDate) {
            res.push({ assignment, isEndAssignment: true });
        }
        res.push({ assignment, isEndAssignment: false });
        return res;
    }, []);
    // console.log(sortedAssignments);
    const initialData = sortedAssignments.reduce<NormalizeAssignmentsData[]>(
        res => {
            return res;
        },
        [{ assignment: [] }],
    );
    const data = sortedAssignments.reduce<NormalizeAssignmentsData[]>(res => {
        return res;
    }, initialData);
    // data;
    return data;
};
