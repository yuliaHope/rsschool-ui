import * as React from 'react';
import AssignmentItem from './AssignmentItem';
import { IAssignmentDocument } from 'core/models';

type AssignmentsProps = {
    courseId: string;
    assignments: any;
    submitSolution: (assignment: IAssignmentDocument) => void;
};

const Assignments = (props: AssignmentsProps) => {
    const { assignments } = props;
    return (
        <div className="card-deck mb-3">
            {assignments
                ? assignments.map((assignment: any) => {
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
