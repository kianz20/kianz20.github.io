import React from 'react';
import './ContentSquare.css';

interface ContentSquareProps {
    className: string;
    content: React.ReactNode;
}

const ContentSquare: React.FC<ContentSquareProps> = ({ content, className }) => {
    return (
        <div className={className}>
            {content}
        </div>
    );
};

export default ContentSquare;