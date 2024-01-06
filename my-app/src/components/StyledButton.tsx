import React from 'react';
import './StyledButton.css';

interface StyledButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ onClick, children }) => {
    return (
        <button className="styled-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default StyledButton;
