import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, CardFooter } from 'reactstrap';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));

type AssignmentItemFormProps = {
    isEndAssingment: boolean;
    status: string;
    onSubmit: () => void;
};

class AssignmentItemForm extends React.PureComponent<AssignmentItemFormProps> {
    onSubmitForm = (event: any) => {
        event.preventDefault();
        this.props.onSubmit();
    };

    render() {
        const { status, isEndAssingment } = this.props;
        return (
            status === 'Assigned' &&
            !isEndAssingment && (
                <CardFooter className={cn('card-footer')}>
                    <small className="text-muted">
                        <Form onSubmit={this.onSubmitForm}>
                            <FormGroup>
                                <Label for="exampleInputEmail1">Choose repo</Label>
                                <Input
                                    type="text"
                                    bsSize="sm"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter link"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleInputEmail9">Comments</Label>
                                <Input
                                    type="textarea"
                                    rows={3}
                                    bsSize="sm"
                                    id="exampleInputEmail9"
                                    placeholder="Write comments here"
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

export default AssignmentItemForm;
