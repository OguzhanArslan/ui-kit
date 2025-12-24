import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonTypes = "primary" | "secondary" | "tertiary";

export interface IButtonProps {
    label: string;
    type?: ButtonTypes;
    onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
    const { label, type = "primary", onClick } = props;

    return (
        <button className={classNames(styles.button, styles[type])} onClick={onClick}>{label}</button>
    )
}