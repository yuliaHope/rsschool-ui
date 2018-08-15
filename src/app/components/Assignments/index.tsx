import * as React from 'react';
import AssignmentItem from './AssignmentItem';
import { NormalizeAssignmentsData } from 'core/helpers';
import { IAssignmentDocument } from 'core/models';

type AssignmentsProps = {
    courseId: string;
    normalizeData: NormalizeAssignmentsData[];
    submitSolution: (assignment: IAssignmentDocument) => void;
};

const Assignments = (props: AssignmentsProps) => {
    const { normalizeData } = props;
    return (
        <div className="card-deck mb-3 justify-content-center">
            {normalizeData[0]
                ? normalizeData[0].assignments.map(assignment => {
                      return (
                          <AssignmentItem
                              key={assignment.assignment._id}
                              assignment={assignment.assignment}
                              isEndAssignment={assignment.isEndAssignment}
                              submitSolution={props.submitSolution}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default Assignments;
