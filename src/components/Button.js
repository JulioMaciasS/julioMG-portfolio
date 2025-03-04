import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline '];

const SIZES = ['btn--medium', 'btn--large', 'btn--xlarge'];

const SHAPES = ['', 'btn--round'];

const BG = [ '' , 'bg-[#1a1717] text-white']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonShape,
    className
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonShape = SHAPES.includes(buttonShape) ? buttonShape : SHAPES[0];
    const checkButtonBackground = buttonStyle === 'btn--outline' ? BG[1] : BG[0];
    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonShape} ${checkButtonBackground} ${className || ''} `}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
};