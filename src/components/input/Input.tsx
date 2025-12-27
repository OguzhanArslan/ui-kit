import styles from './Input.module.scss';

export interface IInputProps {
    name: string;
    type?: string
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    isError?: boolean;
    isLoading?: boolean;
}

export const Input = (props: IInputProps) => {
    const { type = "text", ...rest } = props;

    return (
        <input
            className={styles.input}
            type={type}
            {...rest}
        />
    )
}