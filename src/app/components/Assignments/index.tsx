import * as React from 'react';
import AssignmentItem from './AssignmentItem';
import { INormalizeAssignment } from 'core/reducers/assignments';

type AssignmentsProps = {
    courseId: string;
    assignments: INormalizeAssignment[];
    updateAssignment: (assignment: INormalizeAssignment) => void;
};

const Assignments = (props: AssignmentsProps) => {
    const { assignments } = props;
    return (
        <div className="card-deck mb-3">
            {assignments
                ? assignments.map((assignment: INormalizeAssignment) => {
                      return (
                          <AssignmentItem
                              key={assignment.assignment._id}
                              assignment={assignment}
                              updateAssignment={props.updateAssignment}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default Assignments;
