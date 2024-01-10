import React from 'react';
import './StyledButton.css';

interface StyledButtonProps {
    onClick: () => void;
    content: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ onClick, content }) => {
    return (
        <button className="styled-button" onClick={onClick}>
            {content}
        </button>
    ); 
};

export default StyledButton;
