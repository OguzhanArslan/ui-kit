export type ButtonTypes = "primary" | "secondary";

export interface IButtonProps {
    label: string;
    type?: ButtonTypes;
    onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
    const { label, type = "primary", onClick } = props;

    return (
        <button className={type} onClick={onClick}>{label}</button>
    )
}