import { useState, useEffect, ReactNode } from "react";



interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: ReactNode | ReactNode[];
}


const Button: React.FC<ButtonProps> = ({variant, children}) => {
    const pre = 'px-[32px] text-[14px] py-[14px] font-[550]'
    const [className, setClassName] = useState(pre);

    useEffect(() => {
        if(variant === 'primary') {
            setClassName(pre +  ' bg-primary text-white')
        }
        else if(variant === 'secondary') {
            setClassName(pre + ' bg-white text-black')
        }
    }, [variant])

    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button;
