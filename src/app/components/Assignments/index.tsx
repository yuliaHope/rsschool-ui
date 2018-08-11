import * as React from 'react';
import AssignmentItem from './AssignmentItem';
import { NormalizeAssignmentsData } from 'core/helpers';
import { IAssignment, IAssignmentDocument } from 'core/models';
import './index.scss';

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
        const chunkedAssignments = normalizeData[0]
            ? normalizeData[0].assignments.reduce<any[][]>((prev, next, index) => {
                  if (index % 3 === 0) {
                      prev.push([]);
                  }
                  prev[prev.length - 1].push(next);
                  return prev;
              }, [])
            : [];

        return chunkedAssignments.map((rowOfAssignments, i) => {
            return (
                <div className="card-deck mb-3" key={i}>
                    {rowOfAssignments.map(assignment => {
                        return (
                            <AssignmentItem
                                key={assignment.assignment._id}
                                isEndAssignment={assignment.isEndAssignment}
                            />
                        );
                    })}
                </div>
            );
        });
    }
}

export default Assignments;
