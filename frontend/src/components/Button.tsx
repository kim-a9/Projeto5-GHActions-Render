interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'danger';
}

export const Button = ({ variant = 'primary', children, ...props}: ButtonProps) => {
    const btnColor = variant === 'primary'? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700';

    return (
        <button 
            className={`${btnColor} text-white px-4 py-2 rounded-md transition-all sm:w-auto w-full`} 
            {...props}
        >
            {children}

        </button>
    );
};

