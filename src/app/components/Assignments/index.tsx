import * as React from 'react';
import AssignmentItem from './AssignmentItem';
import { NormalizeAssignmentsData } from 'core/helpers';
import { IAssignment, IAssignmentDocument } from 'core/models';

type AssignmentsProps = {
    courseId: string;
    normalizeData: NormalizeAssignmentsData[];
    isAdmin: boolean;
    submitSolution: (assignment: IAssignment) => void;
};

type AssignmentsState = {
    assignment: IAssignmentDocument | undefined;
};

class Assignments extends React.PureComponent<AssignmentsProps, AssignmentsState> {
    state: AssignmentsState = {
        assignment: undefined,
    };

    handleSubmitSolution = () => {
        // console.log('submiting data');
    };

    render() {
        const { normalizeData } = this.props;

        return (
            <React.Fragment>
                <div className="card-deck mb-3">
                    {normalizeData[0]
                        ? normalizeData[0].assignments.map(() => {
                              return <AssignmentItem key={1} />;
                          })
                        : null}
                </div>
            </React.Fragment>
        );
    }
}

export default Assignments;
