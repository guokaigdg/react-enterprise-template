import React, {FC} from 'react';
import './index.less';

interface CardProps {
    children?: string | React.ReactNode;
}

const Card: FC<CardProps> = (props) => {
    const {children} = props;
    return <div className='cp-card'>{children}</div>;
};

export default Card;
