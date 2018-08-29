import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ReduxProviderDecorator } from '../../../storybook/ReduxProviderDecorator';
import Tasks from '../index';

storiesOf('Tasks', module)
    .addDecorator(storyFn => <ReduxProviderDecorator>{storyFn()}</ReduxProviderDecorator>)
    .add('With Data', () => {
        return (
            <Tasks
                studentId={'nikkaktus24'}
                courseId={'rs-course-2018q3'}
                isLoading={false}
                error={undefined}
                assignments={[
                    {
                        title: 'Test task',
                        urlToDescription: 'Test description',
                    },
                ]}
            />
        );
    })
    .add('No Data', () => {
        return <Tasks studentId={''} courseId={''} isLoading={false} error={undefined} assignments={[]} />;
    });
