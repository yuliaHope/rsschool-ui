import * as React from 'react';
import AssignmentItem from './AssignmentItem';
import { INormalizeAssignment } from 'core/reducers/assignments';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));

type AssignmentsProps = {
    courseId: string;
    assignments: INormalizeAssignment[];
    updateAssignment: (assignment: INormalizeAssignment) => void;
};

const Assignments = (props: AssignmentsProps) => {
    const { assignments } = props;
    return (
        <div className={`${cn('card-deck')} card-deck mb-3 justify-content-between`}>
            {assignments
                ? assignments.map((assignment: INormalizeAssignment) => {
                      if (assignment.isActiveAssignment) {
                          return (
                              <AssignmentItem
                                  key={assignment.assignment._id}
                                  assignment={assignment}
                                  updateAssignment={props.updateAssignment}
                              />
                          );
                      } else {
                          return null;
                      }
                  })
                : null}
        </div>
    );
};

export default Assignments;
