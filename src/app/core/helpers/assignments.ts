import { IAssignmentDocument } from '../models';

type INormalizeAssignments = {
    isEndAssignment: boolean;
    assignment: IAssignmentDocument;
};

export type NormalizeAssignmentsData = {
    assignments: INormalizeAssignments[];
};

export const getNormalizeAssignmentsData = (assignments: IAssignmentDocument[]): NormalizeAssignmentsData[] => {
    const sortedAssignments = assignments
        .reduce<INormalizeAssignments[]>((res, assignment) => {
            if (assignment.deadlineDate < Date.now() && assignment.score === null) {
                res.push({ assignment, isEndAssignment: true });
            } else {
                res.push({ assignment, isEndAssignment: false });
            }
            return res;
        }, [])
        .sort((assignmentA, assignmentB) => {
            const a = assignmentA.assignment.deadlineDate!;
            const b = assignmentB.assignment.deadlineDate!;
            return b - a;
        });
    const initialData = sortedAssignments.reduce<NormalizeAssignmentsData[]>(
        res => {
            return res;
        },
        [{ assignments: [] }],
    );
    const data = sortedAssignments.reduce<NormalizeAssignmentsData[]>((res, normalizeAssignment) => {
        for (const item of res) {
            if (item) {
                item.assignments.push(normalizeAssignment);
            }
        }
        return res;
    }, initialData);
    return data;
};
