import { ReactNode } from 'react';

interface ParagraphProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
    return <p className={className}>{children}</p>;
};

export default Paragraph;
