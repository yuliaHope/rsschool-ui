import * as React from 'react';
import TaskItem from 'components/TaskItem';
import { TasksData } from 'core/constants/tasks';

export default class Tasks extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <React.Fragment>
                <h2>Tasks</h2>
                <p>
                    Your github private repository <a href="#">Link TO Git</a>
                </p>
                {TasksData.map(elem => <TaskItem task={elem} key={elem._id} />)}
            </React.Fragment>
        );
    }
}
