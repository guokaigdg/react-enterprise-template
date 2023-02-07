import React from 'react';
import './home.scss';

interface HomeProps {
    name: string;
}

const Home: React.FC<HomeProps> = (props) => {
    const {name} = props;
    return (
        <div className='home-root'>
            <span className='text'>{`Hello ${name}`}</span>
        </div>
    );
};

export default Home;
