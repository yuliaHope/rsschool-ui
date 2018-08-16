import { IAssignmentDocument, IEventDocument } from '../models';

type INormalizeAssignments = {
    isEndAssignment: boolean;
    assignment: any;
};

export type NormalizeAssignmentsData = {
    assignments: INormalizeAssignments[];
};

export const getNormalizeAssignmentsData = (
    assignments: IAssignmentDocument[],
    tasks: IEventDocument[],
): NormalizeAssignmentsData[] => {
    let k: number = 0;
    const sortedAssignments = assignments
        .reduce<INormalizeAssignments[]>((res, assignment) => {
            const assignment2: any = { ...assignment, ...tasks[k] };
            k++;
            assignment = assignment2;
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
