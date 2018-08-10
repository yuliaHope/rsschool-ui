// import { DateTime, Interval } from 'luxon';

import { IAssignmentDocument } from '../models';

type INormalizeAssignments = {
    isEndAssignment: boolean;
    assignment: IAssignmentDocument;
};

export type NormalizeAssignmentsData = {
    assignments: INormalizeAssignments[];
};

export const getNormalizeAssignmentsData = (assignments: IAssignmentDocument[]): NormalizeAssignmentsData[] => {
    const dateNow = Date.now();
    const sortedAssignments = assignments.reduce<INormalizeAssignments[]>((res, assignment) => {
        // console.log(assignment.deadlineDate, dateNow);
        if (assignment.deadlineDate > dateNow) {
            res.push({ assignment, isEndAssignment: false });
        } else {
            res.push({ assignment, isEndAssignment: true });
        }
        return res;
    }, []);
    // console.log(sortedAssignments);
    const initialData = sortedAssignments.reduce<NormalizeAssignmentsData[]>(
        res => {
            return res;
        },
        [{ assignments: [] }],
    );
    // console.log(sortedAssignments);
    const data = sortedAssignments.reduce<NormalizeAssignmentsData[]>((res, normalizeAssignment) => {
        for (let index = 0; index < res.length; index++) {
            /* 123
            123
            123
            123
            123
            123
             */
            if (index) {
                const item = res[index];
                item.assignments.push(normalizeAssignment);
            } else {
                const item = res[index];
                item.assignments.push(normalizeAssignment);
            }
        }
        // console.log(res);
        return res;
    }, initialData);
    // data;
    return data;
};
