import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button 
            type="button"
            className="btn btn-primary mr-5"
            onClick={onClick}>
                {children}
        </button>
    );
}

export default Button;