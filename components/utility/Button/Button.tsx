import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, className, onClick, type = 'button' }: ButtonProps) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;
