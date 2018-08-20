import * as React from 'react';
import { Field } from 'redux-form';
import { Form, FormGroup, Button } from 'reactstrap';
import { requiredFieldError, requiredFieldSuccess, urlFieldError } from 'core/validation';
import ReduxFormInput from 'components/ReduxFormInput';

type Props = {
    submit: any;
    taskId: number;
    studentId: string;
    courseId: string;
};

export default class FooterForm extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            assignmentRepo: null,
            studentComment: null,
        };
    }

    handleSubmit = (event: any) => {
        const { submit, taskId, studentId, courseId } = this.props;
        const { assignmentRepo, studentComment } = this.state;
        event.preventDefault();
        submit({
            courseId,
            taskId,
            studentId,
            assignmentRepo,
            studentComment,
        });
    };

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <small className="text-muted">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Field
                            name="taskRepo"
                            label="Choose repo"
                            placeholder="Enter link"
                            component={ReduxFormInput}
                            required={true}
                            type="text"
                            validate={[requiredFieldError, urlFieldError]}
                            warn={requiredFieldSuccess}
                            className="form-control form-control-sm"
                            onChange={this.handleChange}
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
                            className="form-control form-control-sm"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" className="btn btn-primary btn-sm">
                        Submit
                    </Button>
                </Form>
            </small>
        );
    }
}
