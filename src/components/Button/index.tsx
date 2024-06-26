import React, {FC, CSSProperties} from 'react';
import type {ButtonType} from './buttonHelpers';
import CX from 'classnames';
import './index.less';

interface ButtonProps {
    className?: string;
    style?: CSSProperties;
    type?: ButtonType;
    active?: boolean;
    children?: string | React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Button: FC<ButtonProps> = (props) => {
    const {onClick, children, className, style, active, type = 'default', ...restProps} = props;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    };
    const classes = CX(
        'cp-btn',
        {
            [`cp-${type}`]: type,
            'cp-btn-active': active
        },
        className
    );

    return (
        <button
            className={classes}
            style={{
                ...style
            }}
            onClick={handleClick}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
