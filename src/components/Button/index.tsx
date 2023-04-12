import React, {FC} from 'react';
import './index.less';

interface ButtonProps {
    children?: string | React.ReactNode;
    onClick?: (...args: any) => any;
}

const Button: FC<ButtonProps> = (props) => {
    const {onClick, children, ...other} = props;
    return (
        <button className='cp-btn' onClick={onClick} {...other}>
            {children}
        </button>
    );
};

export default Button;
