import React from 'react';
import {observer} from 'mobx-react-lite';
import {IconContext, Horse, AddressBook, AndroidLogo, Aperture, Heart, Cube} from '@phosphor-icons/react';
import './index.less';

const Dashboard = () => {
    return (
        <div className='dashboard-root'>
            <span>hello world Dashboard </span>
            <IconContext.Provider
                value={{
                    color: '#f9f4da',
                    size: 48,
                    weight: 'duotone',
                    mirrored: false
                }}
            >
                <div>
                    <Horse /> {/* I'm lime-green, 32px, and bold! */}
                    <Heart /> {/* Me too! */}
                    <Cube /> {/* Me three :) */}
                    <AddressBook />
                    <AndroidLogo />
                    <Aperture />
                </div>
            </IconContext.Provider>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
            <span>hello world Dashboard </span>
        </div>
    );
};

export default observer(Dashboard);
