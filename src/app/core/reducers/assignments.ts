import { IScheduleAction } from '../util';
import { ASSIGNMENT } from '../constants';

export type AssignmentsState = {
    assignments: any;
    error: Error | undefined;
};

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
};

export function assignmentsReducer(state = initialState, action: IScheduleAction): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENT.FETCH_USER_ASSIGNMENTS_OK: {
            const { assignments } = action.payload;
            return {
                ...state,
                error: undefined,
                assignments,
            };
        }
        case ASSIGNMENT.SUBMIT_USER_SOLUTION_OK: {
            const result = action.payload;

            return {
                ...state,
                assignments: [
                    {
                        assignments: state.assignments[0].assignments.map(
                            (item: any) =>
                                item.assignment._id === result._id
                                    ? { assignment: result, isEndAssignment: item.isEndAssignment }
                                    : item,
                        ),
                    },
                ],
            };
        }
        default:
            return state;
    }
}
