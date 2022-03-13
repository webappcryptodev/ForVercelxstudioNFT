import React from 'react';
import ActivityView from './activityView';
import ActivityHero from './hero';

const ActivityContainer = () => {
    return (
        <>
            <ActivityHero />
            <ActivityView/>
        </>
    );
};

export default ActivityContainer;