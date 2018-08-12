import * as React from 'react';
import { ITaskData } from 'core/models';

type Props = {
    task: ITaskData;
};

const TaskItem = ({ task }: Props): JSX.Element => {
    return (
        <div>
            <div>{task.status}</div>
            <div>
                <h5>{task.name}</h5>
                <p>{task.url}</p>
            </div>
            <div>
                {task.attested ? null : (
                    <small>
                        <form>
                            <div>
                                <label>Choose repo</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Comments</label>
                                <input type="text" />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </small>
                )}
            </div>
        </div>
    );
};

export default TaskItem;
