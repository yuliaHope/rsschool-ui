import * as React from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { Button, FormGroup, CardFooter, Form } from 'reactstrap';
import ReduxFormInput from 'components/ReduxFormInput';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));
type AssignmentItemFormProps = {
    isEndAssingment: boolean;
    status: string;
};
export type AssignmentFormData = {
    assignmentRepo: string;
    studentComment: string;
};

class AssignmentItemForm extends React.PureComponent<
    AssignmentItemFormProps & InjectedFormProps<AssignmentFormData, AssignmentItemFormProps>
> {
    render() {
        const { status, isEndAssingment, handleSubmit } = this.props;

        return (
            status === 'Assigned' &&
            !isEndAssingment && (
                <CardFooter className={cn('card-footer')}>
                    <small className="text-muted">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Field
                                    name="assignmentRepo"
                                    label="Choose repo"
                                    placeholder="Enter link"
                                    component={ReduxFormInput}
                                    required={true}
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Field
                                    name="studentComment"
                                    label="Comments"
                                    placeholder="Write comments here"
                                    component={ReduxFormInput}
                                    required={true}
                                    type="textarea"
                                    rows="3"
                                    style="123"
                                    className="form-control-sm"
                                />
                            </FormGroup>
                            <Button type="submit" color="primary" size="sm">
                                Submit
                            </Button>
                        </Form>
                    </small>
                </CardFooter>
            )
        );
    }
}

export default reduxForm<AssignmentFormData, AssignmentItemFormProps>({
    form: 'assignmentForm',
    enableReinitialize: true,
})(
    connect(
        null,
        null,
    )(AssignmentItemForm),
);
