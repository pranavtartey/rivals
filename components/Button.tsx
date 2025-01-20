import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
    varient : "primary" | "secondary" | "text"
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button : FC<ButtonProps> = ({children}) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button;